import { contactsData } from "../../ContactItem/model/contact-fom.data";
import ContactItem from "../../ContactItem/ui/ContactItem";
import ContactHeader from "../../ContactsHeader/ui/ContactHeader";
import '../styles/contacts-info.scss';

interface ContactInfoProps {
  className?: string;
}

function ContactInfo({
  className = ''
}: ContactInfoProps): React.JSX.Element {
  const contactInfo = 'contact-info'

  return (
    <div className={`${contactInfo} ${className}`}>
      <ContactHeader
        title='contact info'
        text="Tortor dignissim convallis aenean et tortor at risus viverra adipiscing."
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