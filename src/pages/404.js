import Link from "next/link";

export default function FourOhFour() {
  return (
    <div className="w-screen h-screen flex flex-col gap-12 justify-center items-center p-10">
      <h1 className="text-[5vw] text-center leading-8 md:text-4xl font-bold">
        متاسفانه صفحه مورد نظر شما یافت نشد
      </h1>
      <Link
        className="border border-customGreen-150 shadow-lg p-4 bg-customGreen rounded text-white font-bold text-xl hover:bg-customGreen-50 hover:text-customGreen"
        href="/"
      >
        بازگشت به صفحه اصلی
      </Link>
    </div>
  );
}
