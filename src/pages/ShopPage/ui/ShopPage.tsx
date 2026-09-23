import { Section } from '@/shared/primitives';
import '../styles/shop-page.scss';
import Container from '@/shared/primitives/Container/Container';
import ShopFilter from './ShopFilter';
import { SubscribeSection } from '@/widgets';
import InstaLinks from '@/widgets/Insta-links/ui/InstaLinks';

function ShopPage({
  className = ''
}: { className?: string }): React.JSX.Element {
  const shopPage = 'shop-page'

  return (
    <Section className={`${shopPage} ${className}`}>
      <Container className={`${shopPage}`}>
        <ShopFilter />
        <SubscribeSection />
        <InstaLinks />
      </Container>
    </Section>
  );
}

export default ShopPage;