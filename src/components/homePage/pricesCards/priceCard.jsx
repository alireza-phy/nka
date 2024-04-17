const PriceCard = ({ price }) => {
  return (
    <div className="w-[300px] h-[200px] rounded-xl flex flex-col gap-4 justify-between p-4 bg-[#15171c21]">
      <span className="text-center font-bold text-2xl">{price.title}</span>
      <span className="text-center font-bold text-3xl">{price?.price} ریال</span>
      <span className="text-center font-bold">11:30:27 1402-12-07</span>
    </div>
  );
};

export default PriceCard;
