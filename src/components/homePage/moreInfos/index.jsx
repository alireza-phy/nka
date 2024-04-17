import Image from "next/image";
import logo from "@/public/assets/images/logo.png";
import { AcademicCapIcon } from "@heroicons/react/20/solid";

const MoreInformation = () => {
  return (
    <div className="bg-[url('/assets/images/slide2.jpg')] bg-cover bg-center h-[500px] flex justify-center items-center p-4">
      <div className="w-max h-max flex flex-col gap-8 p-8">
        <div className="grid grid-cols-12 justify-center items-center">
          <div className="col-start-2 border-white border-l w-4/5 h-full">
            <AcademicCapIcon className="h-16 w-16 text-white" />
          </div>
          <div className="flex col-span-3 flex-col gap-2 text-white">
            <span className="font-bold">واردات و ترخیص کالا</span>
            <span>
              ترخیص کالا در ایران به مفهوم آماده سازی و ارائه اسناد و مدارکی از
              جمله مجوزهای لازم جهت ترخیص کالا می باشد
            </span>
          </div>

          <div className="col-start-8 border-white border-l w-4/5 h-full">
            <AcademicCapIcon className="h-16 w-16 text-white" />
          </div>

          <div className="col-span-3 flex flex-col gap-2 text-white">
            <span className="font-bold">مشاوره امور بازرگانی</span>
            <span>
              ارائه خدمات مشاوره تخصصی و رایگان توسط کارشناسان زبده در بخش های
              واردات، ترخیص، استانداردها و امور مجوزها
            </span>
          </div>
        </div>

        <div className="grid grid-cols-12 justify-center items-center">
          <div className="border-white border-l w-4/5 h-3/5">
            <AcademicCapIcon className="h-16 w-16 text-white" />
          </div>
          <div className="col-span-3 flex flex-col gap-2 text-white">
            <span className="font-bold">ثبت سفارش و مجوزهای ترخیص</span>
            <span>
              ثبت سفارش بازرگانی و اخذ مجوزهای لازم برای صادرات و واردات از
              سازمان ها و وزارت خانه های مربوطه
            </span>
          </div>
          <div className="col-span-2 col-start-6">
            <Image src={logo} width={240} alt="logo" />
          </div>
          <div className="col-start-9 border-white border-l w-4/5 h-3/5">
            <AcademicCapIcon className="h-16 w-16 text-white" />
          </div>
          <div className="col-span-3 flex flex-col gap-2 text-white">
            <span className="font-bold">استاندارد کالا</span>
            <span>اخذ گواهینامه های بازرسی (IC, COI)</span>
          </div>
        </div>

        <div className="grid grid-cols-12 justify-center items-center">
          <div className="col-start-2 border-white border-l w-4/5 h-full">
            <AcademicCapIcon className="h-16 w-16 text-white" />
          </div>
          <div className="flex col-span-3 flex-col gap-2 text-white">
            <span className="font-bold">صادرات</span>
            <span>
              اجرای کلیه عملیات گمرکی مربوط به صادرات مواد اولیه، محصولات آماده
              و ... از گمرکات کشور
            </span>
          </div>

          <div className="col-start-8 border-white border-l w-4/5 h-full">
            <AcademicCapIcon className="h-16 w-16 text-white" />
          </div>

          <div className="col-span-3 flex flex-col gap-2 text-white">
            <span className="font-bold">امور بانکی و اخذ ارز مبادله ای</span>
            <span>ارائه دهنده کلیه خدمات مربوط به تخصیص ارز مبادله ای</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreInformation;
