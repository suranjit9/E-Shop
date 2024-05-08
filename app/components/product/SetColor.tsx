"use client";

import { CartProductType, SelectedImgType } from "../ProductDetails";

interface Props {
  images: SelectedImgType[];
  cartProduct: CartProductType;
  handleColorSelect: (value: SelectedImgType) => void;
}

const SetColor: React.FC<Props> = ({
  images,
  cartProduct,
  handleColorSelect,
}) => {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="font-semibold">Color</span>
        <div className="flex items-center gap-2">
          {images.map((img) => {
            return (
              <div
                key={img.color}
                className={`
                h-7 w-7 rounded-full border-teal-300 flex items-center justify-center
                ${
                  cartProduct.selectedImg.color === img.color
                    ? "border-[1.2px]"
                    : "border-none"
                }
                `}
                onClick={() => handleColorSelect(img)}
              >
                <div
                  className="h-5 w-5 rounded-full border-[1.2px] border-slate-300 cursor-pointer"
                  style={{ backgroundColor: img.colorCode }}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SetColor;
