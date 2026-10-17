import { contactsData } from "@/entities/contact/model/contact-fom.data";
import ContactItem from "@/entities/contact/ui/ContactItem";
import { ContactHeader } from "@/widgets/Contacts";
import '../styles/contacts-info.scss';
import { useTranslation } from "react-i18next";

interface ContactInfoProps {
  className?: string;
}

function ContactInfo({
  className = ''
}: ContactInfoProps): React.JSX.Element {
  const contactInfo = 'contact-info'

  const { t } = useTranslation()

  return (
    <div className={`${contactInfo} ${className}`}>
      <ContactHeader
        title={t('contacts.contactInfo')}
        text={t('contacts.contactInfoText')}
      />
      <ul className={`${contactInfo}__list`}>
        {contactsData.map((contact) => (
          <li
            key={contact.id}
            className={`${contactInfo}__item`}
          >
            <ContactItem contactInfo={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactInfo;