import '../styles/advantages-list.scss';
import { AdvantageItem } from '@/widgets/AdvantageSection';
import { advantageItems } from '../../AdvantagesItem/model/advantage-data';


interface AdvantageListProps {
  className?: string;
}

function AdvantagesList({
  className = ''
}: AdvantageListProps): React.JSX.Element {
  const advantagesList = 'advantages'

  return (
    <div className={`${advantagesList} ${className}`}>
      <ul className={`${advantagesList}__list`}>
        {advantageItems.map((item) => (
          <li
            key={item.title}
            className={`${advantagesList}__item`}>
            <AdvantageItem item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdvantagesList;