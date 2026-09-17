import { socialLinks } from "../model/types";
import LinkBase from "@/shared/ui/LinkBase/ui/LinkBase";
import '../styles/footerLinks.scss';

function FooterLinks(): React.JSX.Element {
  const clFooterLinks = 'footer-links'

  return (
    <ul className={clFooterLinks}>
      {socialLinks.map(({ label, to, icon: Icon }, index) => (
        <li
          className={`${clFooterLinks}__item`}
          key={`${to}-${index}`}>
          <LinkBase
            className={`${clFooterLinks}__link`}
            to={to}
            aria-label={label}>
            <Icon
              className={`${clFooterLinks}__icon`}
              size={20} />
          </LinkBase>
        </li>
      ))}
    </ul>
  );
}

export default FooterLinks;