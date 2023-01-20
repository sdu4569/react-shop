import { Link } from "react-router-dom";
import CartItem from "../Body/CartItem";
import { useShoppingCart } from "../context/ShoppingCartContext";

const CartPage = () => {
  const { items, cartQuantity, cartTotalQuantity, removeFromCart } =
    useShoppingCart();

  if (cartTotalQuantity === 0) {
    return (
      <section className="main pt-16">
        <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
          <div className="text-sm breadcrumbs">
            <ul>
              <li>홈</li>
              <li>장바구니</li>
            </ul>
          </div>
          <div className="mt-6 md:mt-14 px-2 lg:px-0">
            <div>
              <h1 className="text-2xl">장바구니에 물품이 없습니다.</h1>
              <Link to={"/"} className="btn btn-primary mt-10">
                담으러 가기
              </Link>
            </div>
          </div>
        </section>
      </section>
    );
  } else {
    return (
      <section className="main pt-16">
        <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
          <div className="text-sm breadcrumbs">
            <ul>
              <li>홈</li>
              <li>장바구니</li>
            </ul>
          </div>
          <div className="mt-6 md:mt-14 px-2 lg:px-0">
            <div className="lg:flex justify-between mb-20">
              <div>
                <CartItem />
              </div>
              <div className="self-start shrink-0 flex items-center mt-10 mb-20">
                <span className="text-xl md:text-2xl">
                  총 : $
                  {cartQuantity.reduce((total, cartItem) => {
                    const item = items.find((i) => i.id === cartItem.id);
                    return Math.round(
                      total + (item?.price || 0) * cartItem.quantity
                    );
                  }, 0)}
                </span>
                <label
                  htmlFor="confirm-modal"
                  className="modal-button btn btn-primary ml-5"
                >
                  구매하기
                </label>
              </div>
            </div>
          </div>
          <input
            type="checkbox"
            id="confirm-modal"
            className="modal-toggle"
          ></input>
          <div className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">정말로 구매하시겠습니까?</h3>
              <p className="py-4">장바구니의 모든 상품들이 삭제됩니다.</p>
              <div className="modal-action">
                <label
                  htmlFor="confirm-modal"
                  className="btn btn-primary"
                  onClick={() => removeFromCart()}
                >
                  네
                </label>
                <label htmlFor="confirm-modal" className="btn btn-outline">
                  아니오
                </label>
              </div>
            </div>
          </div>
        </section>
      </section>
    );
  }
};

export default CartPage;
