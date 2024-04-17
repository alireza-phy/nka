import { useForm } from "react-hook-form";
import { AcademicCapIcon } from "@heroicons/react/20/solid";
const ConsultForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="bg-[url('/assets/images/slide3.jpg')] bg-cover bg-center h-[650px] flex justify-center items-center p-4">
      <div className="h-[600px] w-1/2 rounded-sm bg-white grid grid-cols-2">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center items-center p-4 gap-8"
        >
          <div className="w-full px-3 mb-0">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="name"
            >
              نام و نام خانوادگی
            </label>
            <input
              {...register("name")}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
            />
          </div>
          <div className="w-full px-3 mb-0">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="phoneNumber"
            >
              شماره تماس
            </label>
            <input
              {...register("phoneNumber", { required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phoneNumber"
              type="text"
            />
          </div>
          <div className="w-full px-3 mb-0">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="service"
            >
              نوع خدمات دریافتی
            </label>
            <div className="relative w-full">
              <select
                {...register("service", { required: true })}
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-6 focus:outline-none focus:bg-white focus:border-gray-500"
                id="service"
              >
                <option>مشاوره</option>
                <option>تخصیص ارز</option>
                <option>ترخیص کالا</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label
              for="formFile"
              className="mb-2 inline-block text-neutral-500 dark:text-neutral-400"
            >
              ارسال فایل
            </label>
            <input
              {...register("formFile")}
              className="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-secondary-500 bg-transparent bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-surface transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:me-3 file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-e file:border-solid file:border-inherit file:bg-transparent file:px-3  file:py-[0.32rem] file:text-surface focus:border-primary focus:text-gray-700 focus:shadow-inset focus:outline-none dark:border-white/70 dark:text-white  file:dark:text-white"
              type="file"
              id="formFile"
            />
          </div>
          <button
            className="shadow bg-green-700 hover:bg-green-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-2/3"
            type="submit"
          >
            ثبت و ارسال
          </button>

          {errors.phoneNumber && (
            <span className="px-3 text-red-500 font-bold text-xs">
              * لطفا شماره تلفن همراه خود را وارد کنید
            </span>
          )}
          {errors.service && (
            <span className="px-3 text-red-500 font-bold text-xs">
              * لطفا نوع خدمات درخواستی را انتخاب نمایید
            </span>
          )}
        </form>

        <div className="bg-[url('/assets/images/business_consultant.jpg')] bg-cover bg-center">
          <div className="h-[64px] w-full bg-[#090a2f] text-white flex justify-center items-center font-bold gap-4">
            <AcademicCapIcon className="text-white w-10 h-10" />
            درخواست مشاوره رایگان
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultForm;
