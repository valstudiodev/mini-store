import Container from "@/shared/primitives/Container/Container";
import Section from "@/shared/primitives/Section/Section";
import '../styles/productPage.scss';
import { HeadingTitle } from "@/shared/typography";

function ProductPage(): React.JSX.Element {
  const classProductPage = 'product-page'

  return (
    <Section className={classProductPage}>
      <Container className={`${classProductPage}__container`}>
        <HeadingTitle>
          Product page
        </HeadingTitle>
      </Container>
    </Section>
  );
}

export default ProductPage;