"use client";

import moment from "moment";
import Heading from "../Heading";
import { Rating } from "@mui/material";
import Avata from "../Avata";

interface Props {
  product: any;
}

const ListRating: React.FC<Props> = ({ product }) => {
  return (
    <div>
      <Heading title="Ratings & Reviews" />
      <div className="text-sm mt-2">
        {product.reviews &&
          product.reviews.map((review: any) => {
            return (
              <div key={review._id} className="max-w-[300px]">
                <div className="flex items-center gap-2">
                  <Avata src={review?.user?.image} />
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="font-semibold">{review?.user.name}</h2>
                      <h2 className="text-[10px]">
                        {moment(review.createdDate).fromNow()}
                      </h2>
                    </div>
                    <Rating
                      value={review.rating}
                      readOnly
                      precision={0.5}
                      size="small"
                    />
                  </div>
                </div>
                <div className="mt-2">
                  <p className="ml-2">{review.comment}</p>
                  <hr className="w-[100%] mt-4 mb-4" />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ListRating;
