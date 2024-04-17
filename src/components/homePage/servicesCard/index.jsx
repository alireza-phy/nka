import ServiceCard from "./serviceCard";
import domesticTradeIcon from "@/public/assets/images/domestic-trade.png";
import foreignBusinessIcon from "@/public/assets/images/foreign-business.png";
import consultIcon from "@/public/assets/images/consult.png";
import clearanceIcon from "@/public/assets/images/clearance.png";
const serviceCards = [
  { id: 1, title: "مشاوره بازرگانی و گمرکی", icon: consultIcon },
  { id: 2, title: "ترخیص کالا", icon: clearanceIcon },
  { id: 3, title: "تجارت خارجی", icon: foreignBusinessIcon },
  { id: 4, title: "تجارت داخلی", icon: domesticTradeIcon },
];

const ServicesCard = () => {
  return (
    <div className="flex h-96 bg-black bg-black relative p-12 items-end">
      <div className="flex gap-[8vw] justify-center -top-[2vw] right-0 w-full absolute">
        {serviceCards.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
      <span className="text-white font-bold text-2xl leading-10 text-center">
        شرکت بازرگانی نگین کوثر آریا با داشتن چند سال سابقه درخشان و کادر مجرب
        در زمینه های بازرگانی بین الملل و ترخیص کالا از گمرکات بندرعباس، بوشهر،
        اصفهان، تهران مشغول فعالیت می باشد و آماده ارائه کلیه خدمات ذکر شده به
        مشتریان و صاحبان کالا است.
      </span>
    </div>
  );
};

export default ServicesCard;
