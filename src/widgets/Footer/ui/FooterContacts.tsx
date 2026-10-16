import { useTranslation } from 'react-i18next';
import { footerContacts } from '../model/footer-data';
import { FooterContactsProps } from '../model/types';
import '../styles/footerContacts.scss';

function FooterContacts({
  title,
  className = ''
}: FooterContactsProps): React.JSX.Element {
  const clFooterContacts = 'footer-contacts'

  const { t } = useTranslation()

  return (
    <div className={`${clFooterContacts} ${className}`}>
      <h3 className={`${clFooterContacts}__title`}>
        {title}
      </h3>
      <ul className={`${clFooterContacts}__list`}>
        {footerContacts.map(({ label, value, href }) => (
          <li
            className={`${clFooterContacts}__item`}
            key={label}
          >
            <p className={`${clFooterContacts}__text`}>
              {t(label)}
            </p>

            <a
              href={href}
              className={`${clFooterContacts}__link`}>
              {value}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterContacts;