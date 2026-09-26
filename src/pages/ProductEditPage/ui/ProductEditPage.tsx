import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { selectProduct } from "@/entities/product/model/productSelector";
import { fetchProductById } from "@/entities/product/model/productThunk";
import ProductEditForm from "@/features/product/edit-product/ui/ProductEditForm";
import { Section } from "@/shared/primitives";
import Container from "@/shared/primitives/Container/Container";
import { useEffect } from "react";
import { useParams } from "react-router";
import '../styles/productEditPage.scss';

function ProductEditPage(): React.JSX.Element {
  const productEdit = 'product-edit'

  const { id } = useParams<{ id: string }>()

  const dispatch = useAppDispatch()

  const product = useAppSelector(selectProduct)

  useEffect(() => {
    if (id) {
      dispatch(fetchProductById({ productId: id }))
    }
  }, [id]);

  console.log(product);
  // console.log(id);



  return (
    <Section className={productEdit}>
      <Container className={`${productEdit}__container`}>
        {/* <Title
          className={`${productEdit}__title`}
          as="h1">
          Product Edit page
        </Title> */}
        <ProductEditForm />
      </Container>
    </Section>
  );
}

export default ProductEditPage;


