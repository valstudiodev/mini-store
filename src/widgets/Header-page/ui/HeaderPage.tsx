
interface HeaderPageProps {
  title: string;
  className?: string;
}

function HeaderPage({
  title,
  className = ''
}: HeaderPageProps): React.JSX.Element {
  const headerPage = 'header-page'

  return (
    <div className={`${headerPage} ${className}`}>
      <h1
        aria-label={title}
        className={`${headerPage}__title`}>
        {title}
      </h1>

    </div>
  );
}

export default HeaderPage;