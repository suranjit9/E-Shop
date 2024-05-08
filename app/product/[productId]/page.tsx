import Container from "@/app/components/Container";
import ProductDetails from "@/app/components/ProductDetails";
import ListRating from "@/app/components/product/ListRating";
import { product } from "@/utils/product";

interface IDprams {
  productId?: string;
}
const ProductPage = ({ params }: { params: IDprams }) => {
  product;
  return (
    <div className="p-8">
      <Container>
        <ProductDetails product={product} />
        <div className="flex flex-col gap-4 mt-11">
          <div><ListRating product={product}/></div>
          <div></div>
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
