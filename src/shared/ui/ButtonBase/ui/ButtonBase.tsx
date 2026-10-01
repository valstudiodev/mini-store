
interface ButtonBaseProps {
  children: React.ReactNode;
  className?: string;
  to?: string;
  onClick?: () => void;
}

function ButtonBase({
  className = '',
  children,
  onClick,
  ...props
}: ButtonBaseProps) {
  const classBtnBase = 'btn-base'

  const baseStyles = [
    'cursor-pointer',
    'transition-all',
    'duration-300',
    `${className}`
  ].join(' ')

  return (
    <button
      className={`${classBtnBase} ${baseStyles}`}
      type="button"
      {...props}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default ButtonBase;