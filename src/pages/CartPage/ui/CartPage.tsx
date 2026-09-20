import Section from "@/shared/primitives/Section/Section";
import '../styles/cartPage.scss';
import CartContent from "@/widgets/Cart/CartContent/ui/CartContent";
import Container from "@/shared/primitives/Container/Container";

function CartPage(): React.JSX.Element {
  const classCartPage = 'cart-page'

  return (
    <Section className={classCartPage}>
      <Container>
        <CartContent />
      </Container>
    </Section>
  );
}

export default CartPage;