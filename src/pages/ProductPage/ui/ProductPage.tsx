import Container from "@/shared/primitives/Container/Container";
import Section from "@/shared/primitives/Section/Section";
import '../styles/productPage.scss';
import { useParams } from "react-router";
import { ProductDetails } from "@/entities";
import { useEffect } from "react";
import { SubscribeSection } from "@/widgets";
import InstaLinks from "@/widgets/Insta-links/ui/InstaLinks";
import { SpinnerDefault } from "@/shared/ui";
import { RelatedProducts } from "@/widgets/Products";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { selectProduct, selectProductError, selectProductloading } from "@/entities/product/model/productSelector";
import { fetchProductById } from "@/entities/product/model/productThunk";
import WarningMessage from "@/shared/ui/WarningMessage/ui/WarningMessage";

function ProductPage() {
  const classProductPage = 'product-page'

  const { id } = useParams<{ id: string }>()

  const dispatch = useAppDispatch()

  const product = useAppSelector(selectProduct)
  const productLoading = useAppSelector(selectProductloading)
  const error = useAppSelector(selectProductError)

  useEffect(() => {
    if (!id) return

    dispatch(fetchProductById({ productId: id }))
  }, [id, dispatch]);

  return (
    <Section className={classProductPage}>
      <Container className={`${classProductPage}__container`}>
        {productLoading ? (
          <div className={`${classProductPage}__loading`}>
            <SpinnerDefault size="large" />
          </div>
        ) : error ? (
          <p role="alert">{error}</p>
        ) : product ? (
          <ProductDetails product={product} />
        ) : (
          <WarningMessage text="Product not found." />
        )
        }
        <RelatedProducts />
        <SubscribeSection />
        <InstaLinks />
      </Container>
    </Section>
  );
}

export default ProductPage;