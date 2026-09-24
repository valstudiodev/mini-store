import { routeMap } from "@/app/routes/routeMap";
import { Section } from "@/shared/primitives";
import Headline from "@/widgets/Headline/ui/Headline";
import ProductList from "@/widgets/ProductList/ui/ProductList";
import '../styles/mobile-products.scss';
import Container from "@/shared/primitives/Container/Container";
import { useAppSelector } from "@/app/store/hooks";
import { selectProducts } from "@/entities/product/model/productSelector";

interface MobileProductsProps {
  className?: string;
}

function MobileProducts({
  className = ''
}: MobileProductsProps): React.JSX.Element {
  const mobileProducts = 'mobile-product'

  const products = useAppSelector(selectProducts)

  const mobileProductsList = products.filter(
    (product) => product.category === 'phones'
  );

  return (
    <Section className={`${mobileProducts} ${className}`}>
      <Container>
        {mobileProductsList.length > 0 && (
          <>
            <Headline
              to={`${routeMap.pages.path}`}
              linkLabel="go to shop"
              title="Mobile product" />
            <ProductList category="phones" />
          </>
        )}

      </Container>
    </Section>
  );
}

export default MobileProducts;