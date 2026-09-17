import '../styles/page404.scss';

function Page404(): React.JSX.Element {
  const classPage404 = 'page-404'
  return (
    <div
      className={classPage404}
    >
      <p className={`${classPage404}__text`}>
        Page is not found.
      </p>
    </div>
  );
}

export default Page404;