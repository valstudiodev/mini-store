import { routeMap } from "@/app/routes/routeMap";
import { Section } from "@/shared/primitives";
import Headline from "@/widgets/Headline/ui/Headline";
import ProductList from "@/widgets/ProductList/ui/ProductList";
import '../styles/mobile-products.scss';
import Container from "@/shared/primitives/Container/Container";
import { useAppSelector } from "@/app/store/hooks";
import { selectProducts, selectProductsLoading } from "@/entities/product/model/productSelector";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { SpinnerDefault } from "@/shared/ui";

interface MobileProductsProps {
  className?: string;
}

function MobileProducts({
  className = ''
}: MobileProductsProps): React.JSX.Element {
  const mobileProducts = 'mobile-product'

  const { t } = useTranslation()

  const products = useAppSelector(selectProducts)
  const productsLoading = useAppSelector(selectProductsLoading)

  const hasPhones = products.some(
    (product) => product.category === 'phones'
  );

  return (
    <Section className={`${mobileProducts} ${className}`}>
      <Container>
        {productsLoading ? (
          <SpinnerDefault size="large" />
        ) : (
          hasPhones && (
            <>
              <Headline
                to={`${routeMap.pages.path}`}
                linkLabel={t('common.goToShop')}
                title={t('home.mobileProduct')} />
              <ProductList category="phones" />
            </>
          )
        )}
      </Container>
    </Section>
  );
}

export default MobileProducts;