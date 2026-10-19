import Section from "@/shared/primitives/Section/Section";
import '../styles/cartPage.scss';
import CartContent from "@/widgets/Cart/CartContent/ui/CartContent";
import Container from "@/shared/primitives/Container/Container";
import { SubscribeSection } from "@/widgets";
import InstaLinks from "@/widgets/Insta-links/ui/InstaLinks";

function CartPage(): React.JSX.Element {
  const classCartPage = 'cart-page'

  return (
    <Section className={classCartPage}>
      <Container>
        <CartContent />
        <SubscribeSection />
        <InstaLinks />
      </Container>
    </Section>
  );
}

export default CartPage;