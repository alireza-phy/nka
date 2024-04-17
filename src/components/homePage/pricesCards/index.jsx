import PriceCard from "./priceCard";

const pricesCards = [
  { id: 1, title: "بورس", price: 12391239 },
  { id: 2, title: "نفت", price: 12391239 },
  { id: 3, title: "مثقال", price: 12391239 },
  { id: 4, title: "طلا 18", price: 12391239 },
  { id: 5, title: "طلا 24", price: 12391239 },
  { id: 6, title: "سکه آزادی", price: 12391239 },
  { id: 7, title: "سکه امامی", price: 12391239 },
  { id: 8, title: "سکه نیم", price: 12391239 },
  { id: 9, title: "سکه ربع", price: 12391239 },
  { id: 10, title: "گرمی", price: 12391239 },
  { id: 11, title: "یورو", price: 12391239 },
  { id: 12, title: "دلار", price: 12391239 },
];

const PricesCards = () => {
  return (
    <div className="flex flex-wrap gap-4 p-4 justify-center">
      {pricesCards.map((price) => (
        <PriceCard key={price.id} price={price} />
      ))}
    </div>
  );
};

export default PricesCards;
