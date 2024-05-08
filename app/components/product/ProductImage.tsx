"use client";

import Image from "next/image";
import { CartProductType, SelectedImgType } from "../ProductDetails";

interface productImageProps {
  cartProduct: CartProductType;
  product: any;
  handelColorSelect: (value: SelectedImgType) => void;
}

const ProductImage: React.FC<productImageProps> = ({
  cartProduct,
  product,
  handelColorSelect,
}) => {
  return (
    <div className=" grid grid-cols-6 gap-2 items-center justify-center h-full max-h-[500px] min-h-[300px] sm:min-h-[400px]">
      <div className="flex-col gap-4 cursor-pointer  h-full max-h-[500px] min-h-[300px] sm:min-h-[400px] flex items-center justify-center ">
        {product.images.map((image: any) => {
          return (
            <div
              key={image.color}
              onClick={() => handelColorSelect(image)}
              className={`${
                cartProduct.selectedImg.color === image.color
                  ? "border-[4px]"
                  : "border-none"
              } gap-3 mb-3 relative w-[80%] mx-auto aspect-square rounded border-teal-300 flex items-center justify-center`}
            >
              <Image
                src={image.image}
                alt="image"
                className="object-contain"
                width={200}
                height={200}
              />
            </div>
          );
        })}
      </div>
      <div className="col-span-5 relative aspect-square">
        <Image
          src={cartProduct.selectedImg.image}
          alt={product.name}
          className="object-contain w-full h-full"
          fill
        />
      </div>
    </div>
  );
};

export default ProductImage;
