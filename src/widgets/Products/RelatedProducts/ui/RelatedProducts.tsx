import { Section } from '@/shared/primitives';
import '../styles/relateProducts.scss';
import Container from '@/shared/primitives/Container/Container';
import { useAppSelector } from '@/app/store/hooks';
import { selectProductloading, selectProducts, selectProductsLoading } from '@/entities/product/model/productSelector';
import { useTranslation } from 'react-i18next';
import { SpinnerDefault } from '@/shared/ui';
import Headline from '@/widgets/Headline/ui/Headline';
import { routeMap } from '@/app/routes/routeMap';
import ProductList from '@/widgets/ProductList/ui/ProductList';

interface RelatedProductsProps {
  className?: string;
}

function RelatedProducts({
  className = ''
}: RelatedProductsProps): React.JSX.Element {
  const relatedProducts = 'related-products'

  const { t } = useTranslation()

  const products = useAppSelector(selectProducts)
  const productsLoading = useAppSelector(selectProductsLoading)

  const hasRelated = products.some(
    (product) => product.category === 'related'
  )

  return (
    <Section className={`${relatedProducts} ${className}`}>
      <Container className={`${relatedProducts}__container`}>
        {productsLoading ? (
          <div className={`${relatedProducts}__loading`}>
            <SpinnerDefault size='large' />
          </div>
        ) : (
          hasRelated && (
            <>
              <Headline
                to={routeMap.pages.path}
                linkLabel={t('products.relatedProducts.goToShop')}
                title={t('products.relatedProducts.title')}
              />
              <ProductList category='related' />
            </>
          )
        )}
      </Container>
    </Section>
  );
}

export default RelatedProducts;