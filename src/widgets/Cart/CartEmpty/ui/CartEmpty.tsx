import { ArrowRight, ShoppingCart, Sparkles } from 'lucide-react';
import { routeMap } from '@/app/routes/routeMap';
import LinkButton from '@/shared/ui/LinkButton/ui/LInkButton';
import '../styles/cartEmpty.scss';
import { useTranslation } from 'react-i18next';

function CartEmpty(): React.JSX.Element {
  const cartEmpty = 'cart-empty';

  const { t } = useTranslation()

  return (
    <section className={cartEmpty} aria-labelledby={`${cartEmpty}__title`}>
      <div className={`${cartEmpty}__art`} aria-hidden="true">
        <span className={`${cartEmpty}__sparkle ${cartEmpty}__sparkle--top`}>
          <Sparkles />
        </span>
        <span className={`${cartEmpty}__icon`}>
          <ShoppingCart />
        </span>
        <span className={`${cartEmpty}__sparkle ${cartEmpty}__sparkle--bottom`}>
          <Sparkles />
        </span>
      </div>

      <div className={`${cartEmpty}__content`}>
        <p className={`${cartEmpty}__eyebrow`}>{t('cart.empty.eyebrow')}</p>
        <h2 className={`${cartEmpty}__title`} id={`${cartEmpty}__title`}>
          {t('cart.empty.title')}
        </h2>
        <p className={`${cartEmpty}__description`}>
          {t('cart.empty.description')}
        </p>
        <LinkButton
          href={routeMap.pages.path}
          variant="secondary"
          size="large"
          rightIcon={<ArrowRight aria-hidden="true" />}
          className={`${cartEmpty}__button`}
        >
          {t('cart.empty.exploreShop')}
        </LinkButton>
      </div>
    </section>
  );
}

export default CartEmpty;