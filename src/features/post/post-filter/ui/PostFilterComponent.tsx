import { PostFilter } from '@/entities/post/model/post-types';
import '../styles/postFilterComponent.scss';
import { postFilterCategories } from '../model/postFilterData';

interface PostFilterProps {
  category: PostFilter;
  onCategoryChange: (category: PostFilter) => void;
}

function PostFilterComponent({
  category,
  onCategoryChange
}: PostFilterProps): React.JSX.Element {
  const postFilter = 'post-filter'

  return (
    <div className={postFilter}>
      <h3 className={`${postFilter}__title`}>
        categories
      </h3>
      <ul className={`${postFilter}__list`}>
        {postFilterCategories.map((item) => (
          <li
            key={item.value}
            className={`${postFilter}__item`}
          >
            <button
              type='button'
              onClick={() => onCategoryChange(item.value)}
              className={`${postFilter}__btn 
              ${item.value === category ? `${postFilter}__btn--active` : ''}`}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostFilterComponent;