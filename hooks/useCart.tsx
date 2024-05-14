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
  hendalecartTotalquantity: (product: CartProductType) => void;
  hendalehandleQtyDncrement: (product: CartProductType) => void;
  handleclearCart: () => void;
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
  const hendalecartTotalquantity = useCallback(
    (product: CartProductType) => {
      let updatCart;
    if(product.quantity === 99){
      return toast.error("Maximum quantity reached", {
        position: "top-center",
      })
    }
    if (cartProducts) {
      updatCart = [...cartProducts];
      const existingProduct = cartProducts.findIndex(
        (index) => index.id === product.id
      );
      if (existingProduct > -1) {
        updatCart[existingProduct].quantity += 1;
      }
      setCartProducts(updatCart);
      localStorage.setItem("cart", JSON.stringify(updatCart));
    }
    },
    [cartProducts]
  );
  const hendalehandleQtyDncrement = useCallback(
    (product: CartProductType) => {
      let updatCart;
    if(product.quantity === 1){
      return toast.error("Minimum quantity reached", {
        position: "top-center",
      })
    }
    if (cartProducts) {
      updatCart = [...cartProducts];
      const existingProduct = cartProducts.findIndex(
        (index) => index.id === product.id
      );
      if (existingProduct > -1) {
        updatCart[existingProduct].quantity -= 1;
      }
      setCartProducts(updatCart);
      localStorage.setItem("cart", JSON.stringify(updatCart));
    }
    },
    [cartProducts]
  );
  const handleclearCart = useCallback(() => {
    setCartProducts(null);
    setCartTotalQTY(0);
    localStorage.setItem("cart", JSON.stringify(null));
  },[setCartProducts, setCartTotalQTY]);
 

  const value = {
    cartTotalQTY,
    cartProducts: cartProducts || [],
    handelAddToCart,
    handelRemoveToCart,
    hendalecartTotalquantity,
    hendalehandleQtyDncrement,
    handleclearCart
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
