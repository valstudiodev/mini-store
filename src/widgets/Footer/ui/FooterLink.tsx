import { LinkBase } from "@/shared/ui";
import { SocialLink } from "../model/types";
import '../styles/footerLink.scss';

interface FooterLinkProps {
  item: SocialLink;
  className?: string;
}

function FooterLink({
  item,
  className = ''
}: FooterLinkProps): React.JSX.Element {
  const footerLink = 'footer-link'

  const Icon = item.icon

  return (
    <LinkBase
      className={`${footerLink} ${className}`}
      to={item.to}
      aria-label={item.label}
    >
      <span
        aria-hidden='true'
        className={`${footerLink}__icon ${Icon}`}>
      </span>
    </LinkBase>
  );
}

export default FooterLink;