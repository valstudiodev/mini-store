import Section from '@/shared/primitives/Section/Section';
import '../styles/homePage.scss';
import AdvantagesList from '@/widgets/AdvantageList/ui/AdvantagesList';
import MobileProducts from './MobileProducts';
import HeroSection from '@/widgets/Hero/ui/HeroSection';
import SmartWatches from './SmartWatches';
import Banner from '@/widgets/Banner/ui/Banner';
import { SubscribeSection } from '@/widgets';
import InstaLinks from '@/widgets/Insta-links/ui/InstaLinks';

function HomePage(): React.JSX.Element {
  const classHomePage = 'home-page'

  return (
    <Section className={classHomePage}>
      <HeroSection />
      <AdvantagesList />
      <MobileProducts />
      <SmartWatches />
      <Banner />
      <SubscribeSection />
      <InstaLinks />
    </Section>
  );
}

export default HomePage;