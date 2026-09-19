import Section from "@/shared/primitives/Section/Section";
import '../styles/cartPage.scss';
import CartContent from "@/widgets/Cart/CartContent/ui/CartContent";

function CartPage(): React.JSX.Element {
  const classCartPage = 'cart-page'

  return (
    <Section className={classCartPage}>
      <CartContent />
    </Section>
  );
}

export default CartPage;