import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

type Price = {
  price: number;
};

const CartItem = () => {
  const {
    items,
    cartQuantity,
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
  } = useShoppingCart();

  return (
    <>
      {cartQuantity.map((currItem, idx) => {
        const item = items.find((i) => i.id === currItem.id);

        let quantity = getItemQuantity(currItem.id);

        if (item == undefined) {
          return null;
        }

        let itemPrice = item.price * quantity;
        return (
          <div key={idx} className="lg:flex lg:items-center mt-4 px-2 lg:px-0">
            <Link to={`/product/${currItem.id}`} className="">
              <figure className="w-56 min-w-full flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white">
                <img
                  src={item.image}
                  alt="상품 이미지"
                  className="object-contain w-full h-48"
                />
              </figure>
            </Link>
            <div className="card-body px-1 lg:px-12">
              <h2 className="card-title">
                <Link
                  to={`/product/${currItem.id}`}
                  className="link link-hover"
                >
                  {item.title}
                </Link>
              </h2>
              <p className="mt-2 mb-4 text-3xl">${Math.round(itemPrice)}</p>
              <div className="card-actions">
                <div className="btn-group">
                  <button
                    className="btn btn-primary"
                    onClick={() => decreaseCartQuantity(currItem.id)}
                  >
                    -
                  </button>
                  <button className="btn btn-ghost no-animation">
                    {quantity}
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => increaseCartQuantity(currItem.id)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CartItem;
