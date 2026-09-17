import Container from "@/shared/primitives/Container/Container";
import Section from "@/shared/primitives/Section/Section";
import { HeadingTitle } from "@/shared/typography";
import '../styles/contacts.scss';

function ContactsPage(): React.JSX.Element {
  const classContactsPage = 'contacts-page'

  return (
    <Section className={classContactsPage}>
      <Container className={`${classContactsPage}__container`}>
        <HeadingTitle>
          Contacts page
        </HeadingTitle>
      </Container>
    </Section>
  );
}

export default ContactsPage;