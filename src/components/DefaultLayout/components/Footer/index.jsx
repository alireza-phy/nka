const Footer = () => {
  return (
    <footer className={"bg-gray-500 h-[500px] px-4 py-40 grid grid-cols-12"}>
      <div
        className={"col-span-4 flex flex-col gap-4 justify-center items-center"}
      >
        <p className={"text-center text-orange-300 font-bold"}>
          درباره شرکت بازرگانی نگین کوثر آریا
        </p>
        <span className={"text-center text-white font-bold"}>
          شرکت بازرگانی نگین کوثر آریا با داشتن چندسال سابقه درخشان و کادر مجرب
          در زمینه های بازرگانی بین الملل و ترخیص کالا از گمرکات بندعباس، بوشهر،
          اصفهان، تهران مشغول فعالیت می باشد و آماده ارائه کلیه خدمات ذکر شده به
          مشتریان و صاحبان کالا است.
        </span>
      </div>
      <div
        className={
          "col-span-4 col-start-6 flex flex-col gap-2 justify-center items-start"
        }
      >
        <span className={"text-right text-white font-bold"}>
          <p className="text-orange-300 inline">آدرس دفتر مرکزی: </p>
          اصفهان - خیابان توحید - چهارراه توحید - مجتمع نگین - طبقه دوم - پلاک
          212
        </span>
        <span className={"text-right text-white font-bold"}>
          <p className="text-orange-300 inline">فکس / تلفن: </p>
          36261117 / 36261116 - 031
        </span>
        <span className={"text-right text-white font-bold"}>
          <p className="text-orange-300 inline">همراه: </p>
          091224378772 - 09133261998031
        </span>
        <span className={"text-right text-white font-bold"}>
          <p className="text-orange-300 inline">آدرس دفتر دوم: </p>
          بندرعباس - چهارراه 22 بهمن - به سمت دریا - بالای رستوران بیروتی - طبقه
          چهارم - واحد روبه نما
        </span>
        <span className={"text-right text-white font-bold"}>
          <p className="text-orange-300 inline">همراه: </p>
          091224378772
        </span>
        <span className={"text-right text-white font-bold"}>
          <p className="text-orange-300 inline">پست الکترونیکی: </p>
          info@nka.co.ir & info@neginkowsararia.ir
        </span>
      </div>
      <div
        className={
          "col-span-1 col-start-11 flex flex-col items-start justify-center gap-4"
        }
      >
        <span className="text-orange-300 font-bold">سایر خدمات: </span>
        <span className="text-white font-bold"> ترخیص کالا </span>
        <span className="text-white font-bold"> صادرات کالا </span>
        <span className="text-white font-bold"> واردات کالا </span>
        <span className="text-white font-bold"> حمل و نقل </span>
        <span className="text-white font-bold"> اخذ مجوز </span>
      </div>
    </footer>
  );
};

export default Footer;
