"use client";

import { truncateDescription, truncateText } from "@/utils/truncateText";
import { Rating } from "@mui/material";

interface Props {
  product: any;
}

const ProductDetails: React.FC<Props> = ({ product }) => {
  const Horizontal = () => {
    return <hr className="w-[30%] my-1" />;
  };
  const productRating =
    product.reviews.reduce(
      (acc: number, review: any) => acc + review.rating,
      0
    ) / product.reviews.length;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>img</div>
      <div className="flex flex-col gap-4 text-slate-500 text-sm">
        <h1 className="text-3xl font-medium text-slate-700">
          {truncateText(product.name)}
        </h1>
        <div className="flex items-center gap-2">
          <Rating value={productRating} readOnly precision={0.5} />
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
        <div>color</div>
        <Horizontal />
        <div>Qty </div>
        <Horizontal />
        <div>Add to cart </div>
      </div>
    </div>
  );
};

export default ProductDetails;
