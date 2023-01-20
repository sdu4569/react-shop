import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductsDetail } from "../Body/ItemCard";
import { useShoppingCart } from "../context/ShoppingCartContext";

const ProductDetail = () => {
  let category: string = "";
  const { id } = useParams();
  const { items } = useShoppingCart();
  const [itemDetail, setItemDetail] = useState<ProductsDetail | null>(null);
  const { addToCart } = useShoppingCart();
  const selectItem = items.filter((item) => {
    return item.id === Number(id);
  });

  useEffect(() => {
    setItemDetail(selectItem[0]);
  }, [selectItem]);

  if (!itemDetail) {
    return null;
  }

  if (itemDetail.category === "electronics") {
    category = "디지털";
  } else if (itemDetail.category === "jewelery") {
    category = "액세서리";
  } else {
    category = "패션";
  }

  let score: number = Math.floor(itemDetail.rating.rate * 2);
  let scoreArr: boolean[] = [];
  for (let i = 1; i <= 10; i++) {
    if (i <= score) {
      scoreArr.push(true);
    } else {
      scoreArr.push(false);
    }
  }

  return (
    <section className="main pt-16">
      <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>{category}</li>
            <li>{itemDetail.title}</li>
          </ul>
        </div>
        <div className="lg:flex lg:items-center mt-6 md:mt-14 px-2 lg:px-0">
          <figure className="flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white view_image">
            <img
              src={itemDetail.image}
              alt={itemDetail.title}
              className="object-contain w-full h-72 min-w-72"
            />
          </figure>
          <div className="card-body px-1 lg:px-12">
            <h2 className="card-title">
              {itemDetail.title}
              <span className="badge badge-accent ml-2">NEW</span>
            </h2>
            <p>{itemDetail.description}</p>
            <div className="flex items-center mt-3">
              <div className="rating rating-half">
                {scoreArr.map((item, index) => {
                  if (index % 2 === 0) {
                    return (
                      <input
                        key={index}
                        type="radio"
                        name="rating-10"
                        className="bg-yellow-400 cursor-default mask mask-star-2 mask-half-1"
                        disabled={true}
                        checked={item}
                      />
                    );
                  } else {
                    return (
                      <input
                        key={index}
                        type="radio"
                        name="rating-10"
                        className="bg-yellow-400 cursor-default mask mask-star-2 mask-half-2"
                        disabled={true}
                        checked={item}
                      />
                    );
                  }
                })}
              </div>
              <div className="ml-2">
                {itemDetail.rating.rate} / {itemDetail.rating.count} 참여
              </div>
            </div>
            <p className="mt-2 mb-4 text-3xl">${itemDetail.price}</p>
            <div className="card-actions">
              <button
                className="btn btn-primary"
                onClick={() => addToCart(itemDetail.id)}
              >
                장바구니에 담기
              </button>
              <Link to={"/cart"} className="btn btn-outline ml-1">
                장바구니로 이동
              </Link>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ProductDetail;
