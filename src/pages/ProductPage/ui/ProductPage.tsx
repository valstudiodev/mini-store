import Container from "@/shared/primitives/Container/Container";
import Section from "@/shared/primitives/Section/Section";
import '../styles/productPage.scss';
import { useParams } from "react-router";
import ProductDetails from "@/entities/product/ui/ProductDetails";
import { getProductById } from "@/entities/product/api/productServise";
import { useEffect, useState } from "react";
import { Product } from "@/entities/product/model/types";
import { SubscribeSection } from "@/widgets";
import InstaLinks from "@/widgets/Insta-links/ui/InstaLinks";

function ProductPage() {
  const classProductPage = 'product-page'

  const { id } = useParams<{ id: string }>()

  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (!id) return

    let isMounted = true
    async function loadProduct(): Promise<void> {

      if (id) {
        const productDetails = await getProductById(id)
        if (isMounted) {
          setProduct(productDetails)
        }
      }
    }
    loadProduct()
    return () => {
      isMounted = false
    }
  }, [id]);

  return (
    <Section className={classProductPage}>
      <Container className={`${classProductPage}__container`}>
        {product
          ? <ProductDetails product={product} />
          : <div>Loading...</div>
        }

        <SubscribeSection />
        <InstaLinks />
      </Container>
    </Section>
  );
}

export default ProductPage;