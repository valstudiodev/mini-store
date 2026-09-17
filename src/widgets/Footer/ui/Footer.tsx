import Container from '@/shared/primitives/Container/Container';
import '../styles/footer.scss';
import FooterBrand from './FooterBrand';
import FooterMenu from './FooterMenu';


function Footer(): React.JSX.Element {
  const clFooter = 'footer'

  return (
    <footer className={clFooter}>
      <Container className={`${clFooter}__container`}>
        <FooterBrand className={`${clFooter}__brand`} />
        <FooterMenu className={`${clFooter}__menu`} />
      </Container>
    </footer>
  );
}

export default Footer;