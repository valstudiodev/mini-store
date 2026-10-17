import { Section } from '@/shared/primitives';
import '../styles/contacts-section.scss';
import { ContactInfo } from '@/widgets/Contacts'
import { ContactsForm } from '@/features/contact';

function ContactsSection(): React.JSX.Element {
  const contactsSection = 'contacts-section'

  return (
    <Section className={contactsSection}>
      <ContactInfo className={`${contactsSection}__info`} />
      <ContactsForm className={`${contactsSection}__form`} />
    </Section>
  );
}

export default ContactsSection;