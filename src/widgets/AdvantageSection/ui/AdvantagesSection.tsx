import { Section } from "@/shared/primitives";
import Container from "@/shared/primitives/Container/Container";
import { AdvantagesList } from "..";

function AdvantagesSection(): React.JSX.Element {
  const advantagesSection = 'advantages-section'

  return (
    <Section className={advantagesSection}>
      <Container className={`${advantagesSection}__container`}>
        <AdvantagesList />
      </Container>
    </Section>
  );
}

export default AdvantagesSection;