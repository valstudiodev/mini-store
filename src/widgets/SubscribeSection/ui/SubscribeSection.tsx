import { Section } from "@/shared/primitives";
import Subscribe from "@/shared/ui/Subscribe/ui/Subscribe";
import Container from "@/shared/primitives/Container/Container";
import { Title } from "@/shared/typography";
import '../styles/subscribe.scss';

function SubscribeSection({
  className = ''
}: { className?: string }): React.JSX.Element {
  const subscribe = 'subscribe'

  return (
    <Section className={`${subscribe} ${className}`}>
      <Container className={`${subscribe}__container`}>
        <div className={`${subscribe}__content`}>
          <Title
            as="h2"
            className={`${subscribe}__title`}
          >
            Subscribe Us now
          </Title>
          <p className={`${subscribe}__text`}>
            Get latest news, updates and deals directly mailed to your inbox.
          </p>
        </div>
        <Subscribe className={`${subscribe}__form`} />
      </Container>
    </Section>
  );
}

export default SubscribeSection;