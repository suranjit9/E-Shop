"use client";
import { useCart } from "@/hooks/useCart";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import Heading from "../Heading";
import Button from "./Button";
import ItemContent from "./ItemContent";
import { formatPrice } from "@/utils/formatPrice";

const CartClient = () => {

  const { cartProducts, handleclearCart,carttotal } = useCart();
  if (!cartProducts || cartProducts.length === 0) {
    return (
      <div className="flex flex-col items-center gap-2">
        <h3 className="text-2xl">Cart is empty</h3>
        <Link href="/" className="flex items-center gap-1">
          <MdArrowBack />
          <span>Shop Now</span>
        </Link>
      </div>
    );
  }
  return (
    <div>
      <Heading title="Shopping Cart" center />
      <div className="grid grid-cols-5 mt-8 mb-4 text-xs pb2 items-center gap-4">
        <h4 className="col-span-2 pl-2">Product</h4>
        <h4 className="justify-self-center">Price</h4>
        <h4 className="justify-self-center">Quantity</h4>
        <h4 className="justify-self-end pr-2">Total</h4>
      </div>
      <div>
        {cartProducts &&
          cartProducts.map((product) => {
            return <ItemContent key={product.id} product={product} />;
          })}
      </div>
      <div className="border-t-[1.5px] border-slate-300 py-4 flex justify-between gap-4">
        <div className="w-[90px]">
          <Button label="Clear Cart" onClick={()=>handleclearCart()} small outline />
        </div>
        <div className="text-sm items-start flex flex-col gap-1">
          <div className="flex justify-between w-full text-base font-semibold">
            <span>SubTotal : </span>
            <span>{formatPrice(carttotal)}</span>
          </div>
          <p className="text-slate-500">
            Taxes and shipping calculated at checkout
          </p>
          <Button label="Checkout" onClick={() => {}} />
          <Link href="/" className="flex items-center gap-1">
            <MdArrowBack />
            <span>Countinue Shopping</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartClient;
