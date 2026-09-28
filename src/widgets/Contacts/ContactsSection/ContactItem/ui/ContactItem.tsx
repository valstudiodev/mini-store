import { ContactsDataProps } from "../model/contact-fom.data";
import '../styles/contact-item.scss';

interface ContactItemProps {
  className?: string;
  contactInfo: ContactsDataProps;
}

function ContactItem({
  className = '',
  contactInfo
}: ContactItemProps): React.JSX.Element {
  const contactItem = 'contact-item'

  return (
    <article className={`${contactItem} ${className}`}>
      <h3 className={`${contactItem}__title`}>{contactInfo.title}</h3>
      <address className={`${contactItem}__address`}>
        <ul className={`${contactItem}__list`}>
          <li className={`${contactItem}__item`}>
            {contactInfo.contacts.address}
          </li>
          <li className={`${contactItem}__item`}>
            <a
              href={`tel:${contactInfo.contacts.phone1}`}
              className={`${contactItem}__link`}
            >
              {contactInfo.contacts.phone1}
            </a>
          </li>
          <li className={`${contactItem}__item`}>
            <a
              href={`tel:${contactInfo.contacts.phone2}`}
              className={`${contactItem}__link`}
            >
              {contactInfo.contacts.phone2}
            </a>
          </li>
          <li className={`${contactItem}__item`}>
            <a
              href={`mailto:${contactInfo.contacts.email}`}
              className={`mailto: ${contactItem}__link`}
            >
              {contactInfo.contacts.email}
            </a>
          </li>
        </ul>
      </address>
    </article>
  );
}

export default ContactItem;