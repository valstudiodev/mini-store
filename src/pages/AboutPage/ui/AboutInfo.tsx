import { Section } from '@/shared/primitives';
import '../styles/about-info.scss';
import Container from '@/shared/primitives/Container/Container';
import AboutImage from "@/assets/img/about/about-img.webp";
import LinkButton from '@/shared/ui/LinkButton/ui/LInkButton';
import { routeMap } from '@/app/routes/routeMap';

interface AboutInfoProps {
  className?: string;
}

function AboutInfo({
  className = ''
}: AboutInfoProps): React.JSX.Element {
  const aboutInfo = 'about-info'

  return (
    <Section className={`${aboutInfo} ${className}`}>
      <Container className={`${aboutInfo}__container`}>
        <div className={`${aboutInfo}__image`}>
          <img src={AboutImage} alt='image' />
        </div>
        <div className={`${aboutInfo}__content`}>
          <h2 className={`${aboutInfo}__title`}>How was Ministore Found?</h2>
          <div className={`${aboutInfo}__text`}>
            <p>
              Risus augue curabitur diam senectus congue velit et. Sed vitae metus nibh sit era.
              Nulla adipiscing pharetra pellentesque maecenas odio eros at. Et libero vulputate amet
              duis erat volutpat vitae eget.
              Sed vitae metus nibh sit era. Nulla adipiscing pharetra
              pellentesque maecenas odio eros at. Quam libero etiam et in ac at quis.
            </p>
            <p>
              Sed vitae metus nibh sit era. Nulla adipiscing pharetra pellentesque maecenas odio eros at.
              Et libero vulputate amet duis erat volutpat vitae eget. Quam libero etiam et in ac at quis.
              Risus augue curabitur diam senectus congue velit et.
            </p>
          </div>
          <LinkButton
            variant='primary'
            href={routeMap.pages.path}
            className={`${aboutInfo}__btn`}
          >
            Shop Our store
          </LinkButton>
        </div>
      </Container>
    </Section>
  );
}

export default AboutInfo;