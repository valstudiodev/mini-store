import Section from '@/shared/primitives/Section/Section';
import '../styles/homePage.scss';
import AdvantagesList from '@/widgets/AdvantageList/ui/AdvantagesList';
import MobileProducts from './MobileProducts';
import HeroSection from '@/widgets/Hero/ui/HeroSection';
import SmartWatches from './SmartWatches';
import Banner from '@/widgets/Banner/ui/Banner';
import { SubscribeSection } from '@/widgets';
import { useAppDispatch } from '@/app/store/hooks';
import { useEffect } from 'react';
import { fetchProducts } from '@/entities/product/model/productThunk';
import InstaLinks from '@/widgets/Insta-links/ui/InstaLinks';

function HomePage(): React.JSX.Element {
  const classHomePage = 'home-page'

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch]);

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