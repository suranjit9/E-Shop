import { CartProductType } from "@/app/components/ProductDetails";
import { truncateText } from "@/utils/truncateText";
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
  handelRemoveToCart: (product: CartProductType) => void;
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
  const handelAddToCart = useCallback(
    (product: CartProductType) => {
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
      if (product.name) {
        toast.success(`${truncateText(product.name)} added to cart`, {
          position: "top-center",
        });
      } else {
        throw new Error("product.name is null or undefined");
      }
    },
    [setCartProducts]
  );

  const handelRemoveToCart = useCallback(
    (product: CartProductType) => {
      if (cartProducts) {
        const filterCart = cartProducts.filter(
          (item) => item.id !== product.id
        );
        if (product.name) {
          toast.success(`Remove success`, {
            position: "top-center",
          });
        } else {
          throw new Error("product.name is null or undefined");
        }
        localStorage.setItem("cart", JSON.stringify(filterCart));
        setCartProducts(filterCart);
      }
    },
    [cartProducts]
  );

  // useEffect(() => {
  //   if (cartProducts) {
  //     toast.success(
  //       `${cartProducts[cartProducts.length - 1].name} added to cart`,
  //       {
  //         position: "top-center",
  //       }
  //     );
  //   }
  // }, [cartProducts]);

  const value = {
    cartTotalQTY,
    cartProducts: cartProducts || [],
    handelAddToCart,
    handelRemoveToCart,
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
