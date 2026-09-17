// import { BurgerButtonProps } from "../model/types";
import { IconMenuProps } from '../model/types';
import '../styles/mobileMenu.scss';

const formatValue = (val: string | number): string =>
  typeof val === 'number' ? `${val}px` : val;

const MobileMenu: React.FC<IconMenuProps> = ({
  isOpen,
  width = '30px',
  height = '20px',
  color = 'black',
  radius = '10px',
  widthSpan = '100%',
  heightLine = '2px',
  onToggle,
  className = '',
  'aria-label': customAriaLabel,
  onClick,
  ...props
}) => {
  const dynamicStyles: React.CSSProperties = {
    width: formatValue(width),
    height: formatValue(height),
    '--color': color,
    '--radius': formatValue(radius),
    '--width-span': formatValue(widthSpan),
    '--height-line': formatValue(heightLine),
  } as React.CSSProperties;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) onClick(e);
    if (onToggle) onToggle();
  };

  const ariaLabel = customAriaLabel || (isOpen ? 'Closed menu' : 'Opened menu');

  return (
    <button
      type="button"
      onClick={handleClick}
      style={dynamicStyles}
      className={`icon-menu ${isOpen ? 'is-open' : ''} ${className}`.trim()}
      aria-label={ariaLabel}
      aria-expanded={isOpen}
      {...props}
    >
      <span aria-hidden="true" />
    </button>
  );
};

export default MobileMenu