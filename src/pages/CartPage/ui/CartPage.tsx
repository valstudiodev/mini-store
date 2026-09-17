import Container from "@/shared/primitives/Container/Container";
import Section from "@/shared/primitives/Section/Section";
import '../styles/cartPage.scss';
import CartContent from "@/widgets/Cart/CartContent/ui/CartContent";

function CartPage(): React.JSX.Element {
  const classCartPage = 'cart-page'

  return (
    <Section className={classCartPage}>
      <Container className={`${classCartPage}__container`}>
        <CartContent />
      </Container>
    </Section>
  );
}

export default CartPage;