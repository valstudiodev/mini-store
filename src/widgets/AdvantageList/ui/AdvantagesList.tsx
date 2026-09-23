import '../styles/advantages-list.scss';
import AdvantageItem from '@/entities/advantage/ui/AdvantageItem';
import { advantageItems } from '@/entities/advantage/model/advantage-data';
import Container from '@/shared/primitives/Container/Container';


interface AdvantageListProps {
  className?: string;
}

function AdvantagesList({
  className = ''
}: AdvantageListProps): React.JSX.Element {
  const advantagesList = 'advantages'

  return (
    <Container>
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
    </Container>
  );
}

export default AdvantagesList;