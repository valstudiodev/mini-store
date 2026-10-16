import { Section } from '@/shared/primitives';
import '../styles/banner.scss';
import saleImage from "@/assets/img/home/sale-image.webp";
import { Title } from '@/shared/typography';
import LinkButton from '@/shared/ui/LinkButton/ui/LInkButton';
import { routeMap } from '@/app/routes/routeMap';
import Container from '@/shared/primitives/Container/Container';
import { useTranslation } from 'react-i18next';


function Banner({
  className = ''
}: { className?: string }): React.JSX.Element {
  const banner = 'banner'

  const { t } = useTranslation()

  return (
    <Section className={`${banner} ${className}`}>
      <Container className={`${banner}__container`}>
        <div className={`${banner}__content`}>
          <span className={`${banner}__label`}>10% off</span>
          <Title
            className={`${banner}__title`}
            as='h2'>
            {t('home.newYearSale')}
          </Title>
          <LinkButton
            href={`${routeMap.pages.path}`}
            className={`${banner}__btn`}
          >
            {t('common.shopSale')}
          </LinkButton>
        </div>
        <div className={`${banner}__image`}>
          <img src={saleImage} alt='two Apple iPhones' />
        </div>
      </Container>
    </Section>
  );
}

export default Banner;