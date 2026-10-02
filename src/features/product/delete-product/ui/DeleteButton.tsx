import '../styles/delete-button.scss';

interface DeleteButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

function DeleteButton({
  children,
  onClick
}: DeleteButtonProps): React.JSX.Element {
  const deleteBtn = 'delete-button'

  return (
    <button
      type='button'
      className={`${deleteBtn}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default DeleteButton;