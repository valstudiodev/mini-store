import Section from '@/shared/primitives/Section/Section';
import '../styles/homePage.scss';
import { MobileProducts } from '@/widgets/Products';
import HeroSection from '@/widgets/Hero/ui/HeroSection';
import { SmartWatches } from '@/widgets/Products';
import Banner from '@/widgets/Banner/ui/Banner';
import { SubscribeSection } from '@/widgets';
import InstaLinks from '@/widgets/Insta-links/ui/InstaLinks';
import AdvantagesSection from '@/widgets/AdvantageSection/ui/AdvantagesSection';
import { PostLatest } from '@/widgets/Post';
import ReviewsSlider from '@/widgets/Review/Review-slider/ui/ReviewsSlider';

function HomePage(): React.JSX.Element {
  const classHomePage = 'home-page'

  return (
    <Section className={classHomePage}>
      <HeroSection />
      <AdvantagesSection />
      <MobileProducts />
      <SmartWatches />
      <Banner />
      <PostLatest />
      <ReviewsSlider />
      <SubscribeSection />
      <InstaLinks />
    </Section>
  );
}

export default HomePage;