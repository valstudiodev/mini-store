import Logo from '@/shared/typography/Logo/Logo';
import '../styles/footerBrand.scss';
import FooterLinks from './FooterLinks';

function FooterBrand({
  className = ''
}: { className?: string }): React.JSX.Element {
  const clFooterBrand = 'footer-brand'

  return (
    <div className={`${clFooterBrand} ${className}`}>
      <Logo />
      <p className={`${clFooterBrand}__text`}>
        Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit.
        Gravida massa volutpat aenean odio erat nullam fringilla.
      </p>
      <FooterLinks />
    </div >
  );
}

export default FooterBrand;