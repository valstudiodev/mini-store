import Container from "@/shared/primitives/Container/Container";
import Section from "@/shared/primitives/Section/Section";
import '../styles/aboutPage.scss';

function AboutPage(): React.JSX.Element {
  const classAboutPage = 'about-page'

  return (
    <Section className={classAboutPage}>
      <Container className={`${classAboutPage}__container`}>

      </Container>
    </Section>
  );
}

export default AboutPage;