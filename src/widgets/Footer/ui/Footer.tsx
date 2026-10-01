import Container from '@/shared/primitives/Container/Container';
import '../styles/footer.scss';
import FooterBrand from './FooterBrand';
import FooterMenu from './FooterMenu';
import FooterBottom from './FooterBottom';


function Footer(): React.JSX.Element {
  const clFooter = 'footer'

  return (
    <footer className={clFooter}>
      <Container className={`${clFooter}__container`}>
        <div className={`${clFooter}__wrap`}>
          <FooterBrand className={`${clFooter}__brand`} />
          <FooterMenu className={`${clFooter}__menu`} />
        </div>
        <FooterBottom />
      </Container>
    </footer>
  );
}

export default Footer;