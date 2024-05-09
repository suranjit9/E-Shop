import { CartProductType } from "@/app/components/ProductDetails";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import toast from "react-hot-toast";

type CartContextType = {
  cartTotalQTY: number;
  cartProducts: CartProductType[] | null;
  handelAddToCart: (product: CartProductType) => void;
};

export const CartContext = createContext<CartContextType | null>(null);

interface Props {
  [PropsName: string]: any;
}

export const CartContextProvider = (Props: Props) => {
  const [cartTotalQTY, setCartTotalQTY] = useState(0);
  const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(
    null
  );
  useEffect(() => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      const cProduct: CartProductType[] | null = JSON.parse(cart);
      setCartProducts(cProduct);
    }
  }, []);
  const handelAddToCart = useCallback((product: CartProductType) => {
    setCartProducts((prev) => {
      let updatCart;
      if (prev) {
        updatCart = [...prev, product];
      } else {
        updatCart = [product];
      }

      localStorage.setItem("cart", JSON.stringify(updatCart));

      return updatCart;
    });
  }, []);

  useEffect(() => {
    if (cartProducts) {
      toast.success(
        `${cartProducts[cartProducts.length - 1].name} added to cart`,
        {
          position: "top-center",
        }
      );
    }
  }, [cartProducts]);
  const value = {
    cartTotalQTY,
    cartProducts,
    handelAddToCart,
  };
  return <CartContext.Provider value={value} {...Props} />;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === null) {
    throw new Error("useCart must be used within a CartContextProvider");
  }
  return context;
};
