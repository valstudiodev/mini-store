import Section from "@/shared/primitives/Section/Section";
import '../styles/contacts.scss';
import SmartWatches from "@/pages/HomePage/ui/SmartWatches";

function ContactsPage(): React.JSX.Element {
  const classContactsPage = 'contacts-page'

  return (
    <Section className={classContactsPage}>
      <SmartWatches />
    </Section>
  );
}

export default ContactsPage;