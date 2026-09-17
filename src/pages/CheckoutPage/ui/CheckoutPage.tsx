import Container from "@/shared/primitives/Container/Container";
import Section from "@/shared/primitives/Section/Section";
import '../styles/checkoutPage.scss';
import { HeadingTitle } from "@/shared/typography";

function CheckoutPage(): React.JSX.Element {
  const classCheckoutPage = 'checkout-page'

  return (
    <Section className={classCheckoutPage}>
      <Container className={`${classCheckoutPage}__container`}>
        <HeadingTitle>
          Checkout page
        </HeadingTitle>
      </Container>
    </Section>
  );
}

export default CheckoutPage;