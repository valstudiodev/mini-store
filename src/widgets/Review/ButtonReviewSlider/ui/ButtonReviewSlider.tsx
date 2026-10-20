import { ButtonHTMLAttributes } from 'react';
import '../styles/buttonReviewSlider.scss';

interface ButtonReviewSliderProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

function ButtonReviewSlider({
  className = '',
  type = 'button',
  ...props
}: ButtonReviewSliderProps) {
  const btnReviewSlider = 'btn-review-slider'

  return (
    <button
      className={`${btnReviewSlider} ${className}`.trim()}
      type={type}
      {...props}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="27" height="48" viewBox="0 0 27 48" fill="none">
        <path d="M25.1371 46.4142L2.81714 23.7342L25.1371 1.41418" stroke-width="4" stroke="currentColor" />
      </svg>
    </button>
  );
}

export default ButtonReviewSlider;