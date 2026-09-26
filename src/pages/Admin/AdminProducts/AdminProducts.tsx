import { Section } from "@/shared/primitives";
import './admin-products.scss';
import ProductCreateForm from "@/features/product/create-product/ui/ProductCreateForm";
import { Title } from "@/shared/typography";

function AdminProducts({
  className = ''
}: { className?: string }): React.JSX.Element {
  const adminProducts = 'admin-products'

  return (
    <Section className={`${adminProducts} ${className}`}>
      <Title as="h1">
        Products
      </Title>
      <ProductCreateForm />
    </Section>
  );
}

export default AdminProducts;