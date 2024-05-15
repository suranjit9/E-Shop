"use client";
import { useCart } from "@/hooks/useCart";
import { useRouter } from "next/navigation";
import { CiShoppingCart } from "react-icons/ci";

const CartCount = () => {
  const router = useRouter();
  const { cartTotalQTY } = useCart();
  return (
    <div
      className="relative cursor-pointer"
      onClick={() => router.push("/cart")}
    >
      <div className="text-3xl">
        <CiShoppingCart />
        {cartTotalQTY > 0 ? 
        <span className="absolute top-[-10px] right-[-10px] bg-slate-700 h-5 w-5 rounded-full text-white flex items-center justify-center font-semibold text-xs">
        {cartTotalQTY}
      </span>
         :""}
      </div>
    </div>
  );
};

export default CartCount;
