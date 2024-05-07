"use client";

import { formatPrice } from "@/utils/formatPrice";
import { truncateText } from "@/utils/truncateText";
import { Rating } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  data: any;
}

const ProductCard: React.FC<Props> = ({ data }) => {
  const router = useRouter();
  const productRating =
    data.reviews.reduce((acc: number, review: any) => acc + review.rating, 0) /
    data.reviews.length;
  return (
    <div onClick={() => router.push(`/product/${data.id}`)} className="col-span-1 cursor-pointer border-[1.2px] border-slate-200 bg-slate-50 rounded-sm p-2 transition hover:scale-105 text-center text-sm">
      <div className="flex flex-col gap-1 items-center w-full">
        <div className="aspect-square w-full overflow-hidden">
          <Image
            src={data.images[0].image}
            alt={data.name}
            width={200}
            height={200}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="font-bold mt-4">{truncateText(data.name)}</div>
        <div>{data.reviews.length} reviews</div>
        <div>
          <Rating value={productRating} readOnly precision={0.5} />
        </div>
        <div className="font-semibold">{formatPrice(data.price)}</div>
      </div>
    </div>
  );
};

export default ProductCard;
