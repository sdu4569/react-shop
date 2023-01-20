import ItemCard from "../Body/ItemCard";
import { useShoppingCart } from "../context/ShoppingCartContext";

const AccessoryPage = () => {
  const { items } = useShoppingCart();

  return (
    <section className="main pt-16">
      <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>홈</li>
            <li>액세서리</li>
          </ul>
        </div>
        <article className="pt-2 lg:pt-4 pb-4 lg:pb-8 px-4 xl:px-2 mb-20 xl:container mx-auto">
          <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">
            액세서리
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list">
            {items.slice(4, 8).map((item, index) => {
              return <ItemCard key={index} id={item.id} />;
            })}
          </div>
        </article>
      </section>
    </section>
  );
};

export default AccessoryPage;
