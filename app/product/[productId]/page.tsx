
import Container from "@/app/components/Container";
import ProductDetails from "@/app/components/ProductDetails";
import { product } from "@/utils/product";


interface IDprams {
  productId?: string;
}
const ProductPage = ({ params }: { params: IDprams }) => {
 product
  return (
    <div className="p-8">
      <Container>
        <ProductDetails product={product} />
      </Container>
    </div>
  )
};

export default ProductPage;
