import '../styles/pageError.scss';

function ErrorPage(): React.JSX.Element {
  const classErrorPage = 'error-page'
  return (
    <div
      className={classErrorPage}
    >
      <p className={`${classErrorPage}__text`}>
        Error!!!
      </p>
    </div>
  );
}

export default ErrorPage;