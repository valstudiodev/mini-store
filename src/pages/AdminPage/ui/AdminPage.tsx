import ProductCreateForm from "@/features/product/create-product/ui/ProductCreateForm";
import Container from "@/shared/primitives/Container/Container";
import Section from "@/shared/primitives/Section/Section";
import { Title } from "@/shared/typography";


function AdminPage(): React.JSX.Element {
  return (
    <Section>
      <Container>
        <Title>
          Admin page
        </Title>
        <ProductCreateForm />
      </Container>
    </Section>
  );
}

export default AdminPage;