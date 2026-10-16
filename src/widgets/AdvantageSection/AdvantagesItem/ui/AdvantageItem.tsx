import { useTranslation } from 'react-i18next';
import { AdvantageItemProps } from '../model/types';
import '../styles/advantageItem.scss';

function AdvantageItem({
  item
}: AdvantageItemProps): React.JSX.Element {
  const advantageItem = 'advantage-item'

  const { t } = useTranslation()

  const IconItem = item.icon

  return (
    <article className={`${advantageItem}`}>
      {IconItem && (
        <span
          aria-hidden='true'
          className={`${advantageItem}__icon ${IconItem}`}>
        </span>
      )}
      <div className={`${advantageItem}__content`}>
        <h3 className={`${advantageItem}__title`}>
          {t(item.title)}
        </h3>
        <p className={`${advantageItem}__text`}>
          {t(item.text)}
        </p>
      </div>
    </article>
  );
}

export default AdvantageItem;