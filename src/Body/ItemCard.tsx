import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

interface ItemcardProps {
  id: number;
}

export interface ProductsDetail {
  category: string;
  id: number;
  image: string;
  title: string;
  description: string;
  rating: {
    rate: number;
    count: number;
  };
  price: number;
  quantity: number;
}

const ItemCard = (props: ItemcardProps) => {
  const { items } = useShoppingCart();
  const [itemDetail, setItemDetail] = useState<ProductsDetail | null>(null);
  useEffect(() => {
    const selectItem = items.filter((item) => {
      return item.id === props.id;
    });
    setItemDetail(selectItem[0]);
  }, [props.id]);

  if (!itemDetail) {
    return null;
  }
  return (
    <>
      <Link
        to={`/product/${itemDetail.id}`}
        className="card card-bordered border-gray-200 dark:border-gray-800 card-compact lg:card-normal"
      >
        <figure className="flex h-80 bg-white overflow-hidden ">
          <img
            src={itemDetail.image}
            alt="상품 이미지"
            className="transition-transform duration-300 scale-40 hover:scale-50"
          />
        </figure>
        <div className="card-body bg-gray-100 dark:bg-gray-700 rounded-b-2xl">
          <p className="card-title text-base">{itemDetail.title}</p>
          <p className="text-base">${itemDetail.price}</p>
        </div>
      </Link>
    </>
  );
};

export default ItemCard;
