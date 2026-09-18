import Container from "@/shared/primitives/Container/Container";
import { Section } from "@/shared/primitives";
import { InstaLInksProps } from "../model/instaLInks-types";
import '../styles/insta-links.scss';
import InstaLinksList from "./InstaLinkList";
import { Title } from "@/shared/typography";

function InstaLinks({
  className = ''
}: InstaLInksProps): React.JSX.Element {
  const clInstaLinks = 'insta-links'

  return (
    <Section className={`${clInstaLinks} ${className}`}>
      <Container className={`${clInstaLinks}__container`}>
        <Title
          as="h3"
          className={`${clInstaLinks}__title`}
        >
          shop our insta
        </Title>
        <InstaLinksList />
      </Container>
    </Section>
  );
}

export default InstaLinks;