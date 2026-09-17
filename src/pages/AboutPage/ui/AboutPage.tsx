import Container from "@/shared/primitives/Container/Container";
import Section from "@/shared/primitives/Section/Section";
import '../styles/aboutPage.scss';
import { Title } from "@/shared/typography";

function AboutPage(): React.JSX.Element {
  const classAboutPage = 'about-page'

  return (
    <Section className={classAboutPage}>
      <Container className={`${classAboutPage}__container`}>
        <Title
          className={`${classAboutPage}__title`}
          as="h1">
          About us
        </Title>
      </Container>
    </Section>
  );
}

export default AboutPage;