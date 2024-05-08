

export const productRating = (product: any)=>
product.reviews.reduce(
  (acc: number, review: any) => acc + review.rating,
  0
) / product.reviews.length;
