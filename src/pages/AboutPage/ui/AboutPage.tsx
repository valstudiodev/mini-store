import Container from "@/shared/primitives/Container/Container";
import Section from "@/shared/primitives/Section/Section";
import '../styles/aboutPage.scss';
import { AdvantagesList, SubscribeSection } from "@/widgets";
import InstaLinks from "@/widgets/Insta-links/ui/InstaLinks";
import AboutInfo from "./AboutInfo";

function AboutPage(): React.JSX.Element {
  const classAboutPage = 'about-page'

  return (
    <Section className={classAboutPage}>
      <Container className={`${classAboutPage}__container`}>
        <AdvantagesList />
        <AboutInfo />
        <SubscribeSection />
        <InstaLinks />
      </Container>
    </Section>
  );
}

export default AboutPage;