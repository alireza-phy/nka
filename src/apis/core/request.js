import axios from "axios";

export const request = axios.create({
  baseURL: "https://api.soroorgold.com",
  headers: {
    "Content-type": "application/json",
    accept: "application/json",
  },
});
request.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response) => {
    return {
      data: response.data,
      error: null,
      success: { statusCode: response.status, message: response.data.message },
    };
  },
  async function (error) {
    if (error.response) {
      return Promise.reject(
        new Error(
          JSON.stringify({
            statusCode: +error.response.status,
            message: error.response.data.message,
          })
        )
      );
    } else if (error.request) {
      // The request was made but no response was received
      return Promise.reject(
        new Error(
          JSON.stringify({
            statusCode: 512,
            message: "No response received from the server",
          })
        )
      );
    } else {
      // Something happened in setting up the request that triggered an Error
      return Promise.reject(
        new Error(
          JSON.stringify({
            statusCode: 513,
            message: "Request setup error",
          })
        )
      );
    }
  }
);
