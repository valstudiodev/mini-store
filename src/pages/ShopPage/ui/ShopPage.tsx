import Container from "@/shared/primitives/Container/Container";
import Section from "@/shared/primitives/Section/Section";
import '../styles/shopPage.scss';
import { HeadingTitle } from "@/shared/typography";
import { Link } from "react-router";

function ShopPage(): React.JSX.Element {
  const classShopPage = 'shop-page'

  return (
    <Section className={classShopPage}>
      <Container className={`${classShopPage}__container`}>
        <HeadingTitle>
          Shop page
        </HeadingTitle>
        <Link to='/product'>
          Go to product-page
        </Link>
      </Container>
    </Section>
  );
}

export default ShopPage;