import { routeMap } from "@/app/routes/routeMap";
import { Title } from "@/shared/typography";
import { Section } from "@/shared/primitives";
import heroImage from "@/assets/img/home/hero-image.webp";
import '../styles/hero-section.scss';
import Container from "@/shared/primitives/Container/Container";
import LinkButton from "@/shared/ui/LinkButton/ui/LInkButton";

function HeroSection(): React.JSX.Element {
  const heroSection = 'hero-section'

  return (
    <Section className={heroSection}>
      <Container className={`${heroSection}__container`}>
        <div className={`${heroSection}__content`}>
          <Title
            as="h1"
            className={`${heroSection}__title`}
          >
            Your Products are great.
          </Title>
          <LinkButton
            href={routeMap.pages.path}
            variant="primary"
            className={`${heroSection}__btn`}
          >
            Shop Product
          </LinkButton>
        </div>
        <div className={`${heroSection}__img`}>
          <img src={heroImage} alt='hero image' />
        </div>
      </Container>

    </Section>
  );
}

export default HeroSection;