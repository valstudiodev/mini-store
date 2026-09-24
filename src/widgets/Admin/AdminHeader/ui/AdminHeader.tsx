import '../styles/admin-header.scss';

function AdminHeader(): React.JSX.Element {
  const adminHeader = 'admin-header'

  return (
    <header className={adminHeader}>
      <h1 className='texte-center text-3xl'>Admin header</h1>
    </header>
  );
}

export default AdminHeader;