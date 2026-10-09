import Container from "@/shared/primitives/Container/Container";
import Section from "@/shared/primitives/Section/Section";
import '../styles/checkoutPage.scss';
import CheckoutForm from "@/features/checkout/ui/CheckoutForm";
import ButtonSubmit from "@/features/checkout/ui/ButtonSubmit";

function CheckoutPage(): React.JSX.Element {
  const classCheckoutPage = 'checkout-page'

  return (
    <Section className={classCheckoutPage}>
      <Container className={`${classCheckoutPage}__container`}>
        <>
          <CheckoutForm />
          <ButtonSubmit>
            Place an order
          </ButtonSubmit>
        </>
      </Container>
    </Section>
  );
}

export default CheckoutPage;