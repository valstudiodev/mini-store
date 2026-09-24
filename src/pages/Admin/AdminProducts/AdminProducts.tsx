import { Section } from "@/shared/primitives";
import './admin-products.scss';
import ProductCreateForm from "@/features/product/create-product/ui/ProductCreateForm";

function AdminProducts({
  className = ''
}: { className?: string }): React.JSX.Element {
  const adminProducts = 'admin-products'

  return (
    <Section className={`${adminProducts} ${className}`}>
      <h1>Admin products</h1>
      <ProductCreateForm />
    </Section>
  );
}

export default AdminProducts;