import Section from "@/shared/primitives/Section/Section";
import '../styles/shopPage.scss';
import { HeadingTitle } from "@/shared/typography";
import { Link } from "react-router";

function ShopPage(): React.JSX.Element {
  const classShopPage = 'shop-page'

  return (
    <Section className={classShopPage}>
      <HeadingTitle>
        Shop page
      </HeadingTitle>
      <Link to='/product'>
        Go to product-page
      </Link>
    </Section>
  );
}

export default ShopPage;