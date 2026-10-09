import '../styles/button-submit.scss';

interface ButtonSubmitProps {
  children: React.ReactNode
}

function ButtonSubmit({
  children
}: ButtonSubmitProps): React.JSX.Element {
  const buttonSubmit = 'button-submit'

  return (
    <button
      className={buttonSubmit}
      type="submit"
    >
      {children}
    </button>
  );
}

export default ButtonSubmit;