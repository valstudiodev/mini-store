import { Link } from 'react-router';
import '../styles/update-button.scss';

interface UpdateButtonProps {
  to: string;
  children: React.ReactNode;
}

function UpdateButton({
  to,
  children
}: UpdateButtonProps): React.JSX.Element {
  const updateButton = 'update-button'

  console.log('---Edit Button SHARED render---');


  return (
    <Link
      className={updateButton}
      to={to}
    >
      {children}
    </Link>

  );
}

export default UpdateButton;