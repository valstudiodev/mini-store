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

  console.log('---Delete button product render---');


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