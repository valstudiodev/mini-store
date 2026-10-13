import '../styles/button-submit.scss';

interface ButtonSubmitProps {
  children: React.ReactNode,
  className?: string,
  disabled: boolean,
}

function ButtonSubmit({
  children,
  className = '',
  disabled,
  ...props
}: ButtonSubmitProps): React.JSX.Element {
  const buttonSubmit = 'button-submit'

  return (
    <button
      className={`${buttonSubmit} ${className}`}
      type="submit"
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

export default ButtonSubmit;