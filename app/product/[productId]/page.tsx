import Container from "@/app/components/Container";
import ProductDetails from "@/app/components/ProductDetails";
import ListRating from "@/app/components/product/ListRating";
import { products } from "@/utils/products";
// import { product } from "@/utils/product";

interface IDprams {
  productId?: string;
}
const ProductPage = ({ params }: { params: IDprams }) => {
  const product = products.find((product) => product.id === params.productId);
  return (
    <div className="p-8">
      <Container>
        <ProductDetails product={product} />
        <div className="flex flex-col gap-4 mt-11">
          <div>
            <ListRating product={product} />
          </div>
          <div></div>
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
