import { is } from "immer/dist/internal";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { ProductsDetail } from "../Body/ItemCard";
import { fetchProducts } from "../Body/Items";
import { useLocalStorage } from "../hooks/useLocalStorage";

type ShoppingCartContext = {
  addToCart: (id: number) => void;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  getItemQuantity: (id: number) => number;
  removeFromCart: () => void;
  cartQuantity: CartItem[];
  items: ProductsDetail[];
  cartTotalQuantity: number;
};

type ShoppingCartProviderProps = {
  children: ReactNode;
};

export type CartItem = {
  id: number;
  quantity: number;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

export const ShoppingCartProvider = ({
  children,
}: ShoppingCartProviderProps) => {
  const [cartQuantity, setCartQuantity] = useLocalStorage<CartItem[]>(
    "cartQuantity",
    []
  );

  const [items, setItems] = useState<ProductsDetail[]>([]);

  useEffect(() => {
    (async () => {
      const items = await fetchProducts();
      setItems(items);
    })();
  }, []);

  const cartTotalQuantity = cartQuantity.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const getItemQuantity = (id: number) => {
    return cartQuantity.find((item) => item.id === id)?.quantity || 0;
  };

  const addToCart = (id: number) => {
    const selectItem = items.filter((item) => {
      return item.id === id;
    });

    const hasValue = (element: CartItem) => {
      if (element.id === selectItem[0].id) {
        return true;
      }
    };

    const cartHasValue = cartQuantity.filter(hasValue);

    if (cartHasValue.length === 0) {
      setCartQuantity([...cartQuantity, { id, quantity: 1 }]);
    } else {
      alert("이미 장바구니에 존재합니다.");
    }
  };

  const increaseCartQuantity = (id: number) => {
    setCartQuantity((currItems) => {
      return currItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
    });
  };

  const decreaseCartQuantity = (id: number) => {
    setCartQuantity((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeFromCart = () => {
    setCartQuantity([]);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        addToCart,
        increaseCartQuantity,
        decreaseCartQuantity,
        getItemQuantity,
        removeFromCart,
        items,

        cartQuantity,
        cartTotalQuantity,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
