import ItemCard from "./ItemCard";
import { useShoppingCart } from "../context/ShoppingCartContext";

const HomeBody = () => {
  const { items } = useShoppingCart();
  return (
    <>
      <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mt-10 xl:container mx-auto">
        <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">
          패션
        </h2>
        <div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list"
          data-scroll="true"
        >
          {items.slice(0, 4).map((item, index) => {
            return <ItemCard key={index} id={item.id} />;
          })}
        </div>
      </section>
      <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
        <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">
          액세서리
        </h2>
        <div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list"
          data-scroll="true"
        >
          {items.slice(4, 8).map((item, index) => {
            return <ItemCard key={index} id={item.id} />;
          })}
        </div>
      </section>
      <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mb-20 xl:container mx-auto">
        <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">
          디지털
        </h2>
        <div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list"
          data-scroll="true"
        >
          {items.slice(8, 12).map((item, index) => {
            return <ItemCard key={index} id={item.id} />;
          })}
        </div>
      </section>
    </>
  );
};

export default HomeBody;
