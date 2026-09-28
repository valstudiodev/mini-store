import Section from "@/shared/primitives/Section/Section";
import '../styles/contacts.scss';
import Container from "@/shared/primitives/Container/Container";
import ContactsSection from "@/widgets/Contacts/ContactsSection/ui/ContactsSection";
import { SubscribeSection } from "@/widgets";
import InstaLinks from "@/widgets/Insta-links/ui/InstaLinks";

function ContactsPage(): React.JSX.Element {
  const classContactsPage = 'contacts-page'

  return (
    <Section className={classContactsPage}>
      <Container>
        <ContactsSection />
        <SubscribeSection />
        <InstaLinks />
      </Container>
    </Section>
  );
}

export default ContactsPage;