import Section from "@/shared/primitives/Section/Section";
import '../styles/cartPage.scss';
import CartContent from "@/widgets/Cart/CartContent/ui/CartContent";
import Container from "@/shared/primitives/Container/Container";
import { SubscribeSection } from "@/widgets";
import InstaLinks from "@/widgets/Insta-links/ui/InstaLinks";
import { Link } from "react-router";
import { routeMap } from "@/app/routes/routeMap";

function CartPage(): React.JSX.Element {
  const classCartPage = 'cart-page'

  return (
    <Section className={classCartPage}>
      <Container>
        <CartContent />
        <SubscribeSection />
        <Link to={routeMap.checkout.path}>
          Go to Checkout
        </Link>
        <InstaLinks />
      </Container>
    </Section>
  );
}

export default CartPage;