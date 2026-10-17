import { Section } from '@/shared/primitives';
import '../styles/about-info.scss';
import Container from '@/shared/primitives/Container/Container';
import AboutImage from "@/assets/img/about/about-img.webp";
import LinkButton from '@/shared/ui/LinkButton/ui/LInkButton';
import { routeMap } from '@/app/routes/routeMap';
import { useTranslation } from 'react-i18next';

interface AboutInfoProps {
  className?: string;
}

function AboutInfo({
  className = ''
}: AboutInfoProps): React.JSX.Element {
  const aboutInfo = 'about-info'

  const { t } = useTranslation()

  return (
    <Section className={`${aboutInfo} ${className}`}>
      <Container className={`${aboutInfo}__container`}>
        <div className={`${aboutInfo}__image`}>
          <img src={AboutImage} alt='image' />
        </div>
        <div className={`${aboutInfo}__content`}>
          <h2 className={`${aboutInfo}__title`}>{t('about.infoTitle')}</h2>
          <div className={`${aboutInfo}__text`}>
            <p>
              {t('about.infoParagraph1')}
            </p>
            <p>
              {t('about.infoParagraph2')}
            </p>
          </div>
          <LinkButton
            variant='primary'
            href={routeMap.pages.path}
            className={`${aboutInfo}__btn`}
          >
            {t('common.shopOurStore')}
          </LinkButton>
        </div>
      </Container>
    </Section>
  );
}

export default AboutInfo;