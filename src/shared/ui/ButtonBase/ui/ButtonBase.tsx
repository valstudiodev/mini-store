
interface ButtonBaseProps {
  children: React.ReactNode;
  className?: string;
  to?: string;
}

function ButtonBase({
  className = '',
  children,
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

    >
      {children}
    </button>
  );
}

export default ButtonBase;