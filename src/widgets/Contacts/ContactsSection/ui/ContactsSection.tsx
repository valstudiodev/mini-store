import { Section } from '@/shared/primitives';
import '../styles/contacts-section.scss';
import Container from '@/shared/primitives/Container/Container';
import { ContactInfo } from '@/widgets/Contacts'
import { ContactsForm } from '@/features/contact';

function ContactsSection(): React.JSX.Element {
  const contactsSection = 'contacts-section'

  return (
    <Section className={contactsSection}>
      <Container className={`${contactsSection}__container`}>
        <ContactInfo className={`${contactsSection}__info`} />
        <ContactsForm className={`${contactsSection}__form`} />
      </Container>
    </Section>
  );
}

export default ContactsSection;