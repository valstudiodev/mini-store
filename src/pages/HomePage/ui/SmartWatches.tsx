import { routeMap } from "@/app/routes/routeMap";
import { Section } from "@/shared/primitives";
import Headline from "@/widgets/Headline/ui/Headline";
import ProductList from "@/widgets/ProductList/ui/ProductList";
import '../styles/smart-watches.scss';
import Container from "@/shared/primitives/Container/Container";
import { useAppSelector } from "@/app/store/hooks";
import { selectProducts } from "@/entities/product/model/productSelector";
import { useTranslation } from "react-i18next";

interface SmartWatchesProps {
  className?: string;
}

function SmartWatches({
  className = ''
}: SmartWatchesProps): React.JSX.Element {
  const smartWatches = 'smart-watches'

  const { t } = useTranslation()

  const products = useAppSelector(selectProducts)

  const watchProductsList = products.filter(
    (product) => product.category === 'watches'
  );

  return (
    <Section className={`${smartWatches} ${className}`}>
      <Container>
        {watchProductsList.length > 0 && (
          <>
            <Headline
              title={t('home.smartWatches')}
              to={`${routeMap.pages.path}`}
              linkLabel={t('common.goToShop')}
            />
            <ProductList category="watches" />
          </>
        )}
      </Container>
    </Section>
  );
}

export default SmartWatches;