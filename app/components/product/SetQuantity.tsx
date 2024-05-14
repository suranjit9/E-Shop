"use client";

import { Button } from "@mui/material";
import { CartProductType } from "../ProductDetails";

interface SetQtyProps {
  cartCounter?: boolean;
  cartProduct: CartProductType;
  handleQtyIncrement: () => void;
  handleQtyDncrement: () => void;
}
const btnStayl = "border-[1.2px] border-slate-300 px-2 py-1 rounded-md text-sm";

const SetQuantity: React.FC<SetQtyProps> = ({
  cartCounter,
  cartProduct,
  handleQtyIncrement,
  handleQtyDncrement,
}) => {
  return (
    <div className="flex gap-8 items-center">
      {cartCounter ? null : <div className="font-semibold"></div>}
      <div className="flex items-center gap-2 text-base">
        <Button className={btnStayl} onClick={handleQtyDncrement}>
          -
        </Button>
        <div>{cartProduct.quantity}</div>
        <Button className={btnStayl} onClick={handleQtyIncrement}>
          +
        </Button>
      </div>
    </div>
  );
};

export default SetQuantity;
