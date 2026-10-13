import Container from "@/shared/primitives/Container/Container";
import Section from "@/shared/primitives/Section/Section";
import '../styles/checkoutPage.scss';
import CheckoutForm from "@/features/checkout/ui/CheckoutForm";
import { SubscribeSection } from "@/widgets";
import InstaLinks from "@/widgets/Insta-links/ui/InstaLinks";

function CheckoutPage(): React.JSX.Element {
  const classCheckoutPage = 'checkout-page'

  return (
    <Section className={classCheckoutPage}>
      <Container className={`${classCheckoutPage}__container`}>
        <CheckoutForm />
        <SubscribeSection />
        <InstaLinks />
      </Container>
    </Section>
  );
}

export default CheckoutPage;