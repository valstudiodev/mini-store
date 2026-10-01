import Section from '@/shared/primitives/Section/Section';
import '../styles/homePage.scss';
import MobileProducts from './MobileProducts';
import HeroSection from '@/widgets/Hero/ui/HeroSection';
import SmartWatches from './SmartWatches';
import Banner from '@/widgets/Banner/ui/Banner';
import { SubscribeSection } from '@/widgets';
import InstaLinks from '@/widgets/Insta-links/ui/InstaLinks';
import AdvantagesSection from '@/widgets/AdvantageSection/ui/AdvantagesSection';
import PostSection from '@/widgets/Post/PostSection/ui/PostSection';

function HomePage(): React.JSX.Element {
  const classHomePage = 'home-page'

  return (
    <Section className={classHomePage}>
      <HeroSection />
      <AdvantagesSection />
      <MobileProducts />
      <SmartWatches />
      <Banner />
      <PostSection />
      <SubscribeSection />
      <InstaLinks />
    </Section>
  );
}

export default HomePage;