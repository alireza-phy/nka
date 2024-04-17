import exportImg from "@/public/assets/images/export.jpg";
import Image from "next/image";

const articles = [
  {
    id: 1,
    title: "ثبت سفارش کالا و راهنمای جامع آن",
    content:
      "ثبت سفارش واردات کالا یکی از اولین و مهم ترین اقداماتی است که هر تاجر و بازرگانی باید پیش از انجام فرایندهای واردات کالا به آن توجه نموده و زمان و دقت کافی برای انجام...",
    photo: exportImg,
  },
  {
    id: 2,
    title: "شماره ترخیص کار گمرک",
    content:
      "ثبت سفارش واردات کالا یکی از اولین و مهم ترین اقداماتی است که هر تاجر و بازرگانی باید پیش از انجام فرایندهای واردات کالا به آن توجه نموده و زمان و دقت کافی برای انجام...",
    photo: exportImg,
  },
  {
    id: 3,
    title: "قوانین و اصلاحات اینکوترمز",
    content:
      "ثبت سفارش واردات کالا یکی از اولین و مهم ترین اقداماتی است که هر تاجر و بازرگانی باید پیش از انجام فرایندهای واردات کالا به آن توجه نموده و زمان و دقت کافی برای انجام...",
    photo: exportImg,
  },
];
const News = () => {
  return (
    <div className="flex flex-col items-center p-4 gap-12">
      <span className="text-md font-bold text-orange-600">
        اخبار و مقالات ترخیص کالا و بازرگانی
      </span>
      <div className="flex justify-center items-center gap-8">
        {articles.map((article) => (
          <div
            key={article.id}
            className="cursor-pointer w-[300px] flex flex-col gap-4 p-4 border-2 rounded-lg border-blue-500 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 hover:rotate-[1deg] hover:bg-indigo-100 duration-300"
          >
            <Image
              src={article.photo}
              alt={article.title}
              className="w-full h-[160px]"
            />
            <span className="text-orange-800 text-sm font-bold">
              {article.title}
            </span>
            <span>{article.content}</span>
          </div>
        ))}
      </div>
      <button
        className="shadow bg-blue-950 hover:bg-blue-900 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-max transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
        type="submit"
      >
        همه مقالات
      </button>
    </div>
  );
};

export default News;
