"use client";

import { formatPrice } from "@/utils/formatPrice";
import { truncateText } from "@/utils/truncateText";

import Image from "next/image";
import Link from "next/link";
import SetQuantity from "./SetQuantity";
import { useCallback, useState } from "react";
import { CartProductType } from "../ProductDetails";
import { useCart } from "@/hooks/useCart";

interface Props {
  product: any;
}
const ItemContent: React.FC<Props> = ({ product }) => {
  const {
    handelRemoveToCart,
    hendalecartTotalquantity,
    hendalehandleQtyDncrement,
  } = useCart();
  const [CartProduct, setCartProduct] = useState<CartProductType>({
    id: product?.id || "",
    name: product?.name || "",
    description: product?.description || "",
    selectedImg: product?.selectedImg?.image || "",
    category: product?.category || "",
    brand: product?.brand || "",
    price: product?.price || 0,
    quantity: 1,
  });

  return (
    <div className="grid grid-cols-5 text-xs md:text-sm border-[1.5px] border-slate-200 py-4 items-center gap-4">
      <div className="col-span-2 justify-start pl-2 flex gap-2 md:gap-4">
        {product && (
          <Link href={`/product/${product.id}`}>
            <Image
              src={product.selectedImg.image}
              alt={product.name}
              width={50}
              height={50}
            />
          </Link>
        )}
        {product && (
          <div>
            <Link href={`/product/${product.id}`}>
              <h3 className="text-slate-700">{truncateText(product.name)}</h3>
            </Link>
            <p className="text-slate-500">{product.brand}</p>
            <p>{product.selectedImg.color}</p>

            <button
              onClick={() => handelRemoveToCart(product)}
              className="text-slate-400 underline"
            >
              Remove
            </button>
          </div>
        )}
      </div>
      {/* price */}
      <div className="justify-self-center">
        {product && <h2>{formatPrice(product.price)}</h2>}
      </div>
      {/* qty */}
      <div className="justify-self-center">
        {product && (
          <SetQuantity
            cartCounter={true}
            cartProduct={product}
            handleQtyIncrement={() => hendalecartTotalquantity(product)}
            handleQtyDncrement={() => hendalehandleQtyDncrement(product)}
          />
        )}
      </div>
      <div className="justify-self-end pr-2">
        {product && <h3>{formatPrice(product.price * product.quantity)}</h3>}
      </div>
    </div>
  );
};

export default ItemContent;
