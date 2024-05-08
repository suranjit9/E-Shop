"use client";

import { truncateDescription, truncateText } from "@/utils/truncateText";
import { Rating } from "@mui/material";
import { useCallback, useState } from "react";
import SetColor from "./product/SetColor";
import SetQuantity from "./product/SetQuantity";
import Button from "./product/Button";
import ProductImage from "./product/ProductImage";
import { productRating } from "../Helpers/reatingReview";

interface Props {
  product: any;
}
export type CartProductType = {
  id: string;
  name: string;
  description: string;
  selectedImg: SelectedImgType;
  category: string;
  brand: string;
  price: number;
  quantity: number;
};
export type SelectedImgType = {
  color: string;
  colorCode: string;
  image: string;
};

const ProductDetails: React.FC<Props> = ({ product }) => {
  const [CartProduct, setCartProduct] = useState<CartProductType>({
    id: product.id,
    name: product.name,
    description: product.description,
    selectedImg: { ...product.images[0] },
    category: product.category,
    brand: product.brand,
    price: product.price,
    quantity: 1,
  });
  console.log(CartProduct);
  const Horizontal = () => {
    return <hr className="w-[30%] my-1" />;
  };
  // const productRating =
  //   product.reviews.reduce(
  //     (acc: number, review: any) => acc + review.rating,
  //     0
  //   ) / product.reviews.length;

  const handleColorSelect = useCallback((value: SelectedImgType) => {
    setCartProduct((prev) => ({ ...prev, selectedImg: value }));
  }, []);
  // Qty Fun-------
  const handleQtyIncrement = useCallback(() => {
    if (CartProduct.quantity === 100) return;
    setCartProduct((prev) => ({ ...prev, quantity: prev.quantity + 1 }));
  }, [setCartProduct, CartProduct.quantity]);

  const handleQtyDncrement = useCallback(() => {
    if (CartProduct.quantity === 1) return;
    setCartProduct((prev) => ({ ...prev, quantity: prev.quantity - 1 }));
  }, [setCartProduct, CartProduct.quantity]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <ProductImage
        cartProduct={CartProduct}
        product={product}
        handelColorSelect={handleColorSelect}
      />
      <div className="flex flex-col gap-4 text-slate-500 text-sm">
        <h1 className="text-3xl font-medium text-slate-700">
          {truncateText(product?.name)}
        </h1>
        <div className="flex items-center gap-2">
          <Rating value={productRating(product)} readOnly precision={0.5} />
          <p>{product.reviews.length} reviews</p>
        </div>
        <Horizontal />
        <div className="text-justify">
          <p>{truncateDescription(product.description)}</p>
        </div>
        <Horizontal />
        <div className="flex items-center gap-2">
          <div>
            <span className="font-bold mr-1">Category :</span>
            {product.category}
          </div>
          <div>
            <span className="font-bold mr-1">Brand :</span>
            {product.brand}
          </div>
        </div>
        <div
          className={` font-bold ${
            product.inStock ? "text-green-500" : "text-red-500"
          }`}
        >
          {product.inStock ? "In Stock" : "Out of Stock"}
        </div>
        <Horizontal />
        <div>
          <SetColor
            images={product.images}
            cartProduct={CartProduct}
            handleColorSelect={handleColorSelect}
          />
        </div>
        <Horizontal />
        <div>
          <SetQuantity
            cartProduct={CartProduct}
            handleQtyDncrement={handleQtyDncrement}
            handleQtyIncrement={handleQtyIncrement}
          />{" "}
        </div>
        <Horizontal />
        <div className="max-w-[300px]">
          <Button
            label="Add to cart"
            onClick={() => console.log(CartProduct)}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
