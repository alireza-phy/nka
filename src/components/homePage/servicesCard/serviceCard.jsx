import Image from "next/image";

const ServiceCard = ({ service }) => {
  return (
    <div className="w-56 h-56 shadow-inner relative bg-gradient-to-br from-[#3f3e39] to-[#e5d59d] rounded-xl transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 hover:rotate-[1deg] duration-300 cursor-pointer">
      <div className="bg-white hover:bg-[#f7f7cb] absolute top-1 right-1 z-10 border border-black w-56 h-56 p-4 rounded-xl flex flex-col gap-4 justify-between items-center">
        <Image src={service.icon} alt={service.title} width={100} />
        <span className="text-center font-bold">{service.title}</span>
      </div>
    </div>
  );
};

export default ServiceCard;
