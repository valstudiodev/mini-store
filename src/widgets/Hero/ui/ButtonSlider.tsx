import '../styles/hero-section.scss';

interface ButtonSliderProps {
  className?: string;
  disabled?: boolean;
  children: React.ReactNode;
  ariaLabel?: string;
  ref: React.RefObject<HTMLButtonElement | null>;
}

function ButtonSlider({
  className = '',
  disabled,
  children,
  ariaLabel,
  ref,
  ...props
}: ButtonSliderProps): React.JSX.Element {
  const buttonSlider = 'btn-slider'

  return (
    <button
      type="button"
      className={`${buttonSlider} ${className}`}
      disabled={disabled}
      {...props}
      aria-label={ariaLabel}
      ref={ref}
    >
      {children}
    </button>
  );
}

export default ButtonSlider;