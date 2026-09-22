import { routeMap } from "@/app/routes/routeMap";
import { Section } from "@/shared/primitives";
import Headline from "@/widgets/Headline/ui/Headline";
import ProductList from "@/widgets/ProductList/ui/ProductList";
import '../styles/mobile-products.scss';
import Container from "@/shared/primitives/Container/Container";

interface MobileProductsProps {
  className?: string;
}

function MobileProducts({
  className = ''
}: MobileProductsProps): React.JSX.Element {
  const mobileProducts = 'mobile-product'


  return (
    <Section className={`${mobileProducts} ${className}`}>
      <Container>
        <Headline
          to={`${routeMap.pages.path}`}
          linkLabel="go to shop"
          title="Mobile product" />
        <ProductList category="phones" />
      </Container>
    </Section>
  );
}

export default MobileProducts;