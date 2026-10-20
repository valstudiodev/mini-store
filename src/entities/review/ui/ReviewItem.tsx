import { Rating } from '@/shared/ui/Rating/ui/Rating';
import { Review } from '../model/reviewItem-types';
import '../styles/reviewItem.scss';

interface ReviewItemProps {
  review: Review
}

function ReviewItem({
  review
}: ReviewItemProps): React.JSX.Element {
  const reviewItem = 'review-item'

  return (
    <article className={reviewItem}>
      <div className={`${reviewItem}__top`}>
        <span className={`${reviewItem}--icon-quotes-icon`}>

        </span>
        <p className={`${reviewItem}__text`}>
          {review.text}
        </p>
      </div>
      <div className={`${reviewItem}__bottom`}>
        <Rating value={review.rating} />

        <h3 className={`${reviewItem}__author`}>
          {review.author}
        </h3>
      </div>

    </article>
  );
}

export default ReviewItem;