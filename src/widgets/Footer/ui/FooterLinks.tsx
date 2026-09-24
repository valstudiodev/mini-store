import { socialLinks } from "../model/types";
import '../styles/footerLinks.scss';
import FooterLink from "./FooterLink";

function FooterLinks(): React.JSX.Element {
  const clFooterLinks = 'footer-links'

  return (
    <ul className={clFooterLinks}>
      {socialLinks.map((item) => (
        <li
          className={`${clFooterLinks}__item`}
          key={item.label}>
          <FooterLink
            item={item}
          />
        </li>
      ))}
    </ul>
  );
}

export default FooterLinks;