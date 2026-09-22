import { Section } from '@/shared/primitives';
import '../styles/shop-page.scss';
import Container from '@/shared/primitives/Container/Container';
import ShopFilter from './ShopFilter';

function ShopPage({
  className = ''
}: { className?: string }): React.JSX.Element {
  const shopPage = 'shop-page'

  return (
    <Section className={`${shopPage} ${className}`}>
      <Container className={`${shopPage}`}>
        <ShopFilter />
      </Container>
    </Section>
  );
}

export default ShopPage;