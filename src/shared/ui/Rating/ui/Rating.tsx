import '../styles/rating.scss';
import { Star } from "lucide-react";

interface RatingProps {
  value: number;
  max?: number;
  className?: string;
}

export function Rating({
  value,
  max = 5,
  className = '',
}: RatingProps): React.JSX.Element {
  const rating = Number.isFinite(value)
    ? Math.min(Math.max(value, 0), max)
    : 0;

  const stars = Array.from({ length: max }, (_, index) => {
    const fill = Math.min(Math.max(rating - index, 0), 1);

    return (
      <span className="rating__star" key={index} aria-hidden="true">
        <span className="rating__star-empty">
          <Star size={15} />
        </span>
        <span
          className="rating__star-fill"
          style={{ width: `${fill * 100}%` }}
        >
          <Star
            size={15}
            fill='currentColor'
          />
        </span>
      </span>
    );
  });

  return (
    <span
      className={`rating ${className}`.trim()}
      role="img"
      aria-label={`Rating: ${rating} out of ${max}`}
    >
      {stars}
    </span>
  );
}