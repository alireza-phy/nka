import { request } from "@/apis";

export const homepageApi = {
  getHomePageData: async () => {
    return await request.get(`/homepage`);
  },
};