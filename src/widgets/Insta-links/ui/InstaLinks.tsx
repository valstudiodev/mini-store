import Container from "@/shared/primitives/Container/Container";
import { Section } from "@/shared/primitives";
import { InstaLInksProps } from "../model/instaLInks-types";
import '../styles/insta-links.scss';
import InstaLinksList from "./InstaLinkList";
import { Title } from "@/shared/typography";
import { useTranslation } from "react-i18next";

function InstaLinks({
  className = ''
}: InstaLInksProps): React.JSX.Element {
  const clInstaLinks = 'insta-links'

  const { t } = useTranslation()

  return (
    <Section className={`${clInstaLinks} ${className}`}>
      <Container className={`${clInstaLinks}__container`}>
        <Title
          as="h3"
          className={`${clInstaLinks}__title`}
        >
          {t('home.shopOurInsta')}
        </Title>
        <InstaLinksList />
      </Container>
    </Section>
  );
}

export default InstaLinks;