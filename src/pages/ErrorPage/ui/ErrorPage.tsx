import '../styles/pageError.scss';
import { Link, useNavigate } from 'react-router';

function ErrorPage(): React.JSX.Element {
  const classErrorPage = 'error-page';
  const navigate = useNavigate();

  return (
    <main className={classErrorPage} aria-labelledby={`${classErrorPage}__title`}>
      <section className={`${classErrorPage}__panel`}>
        <div className={`${classErrorPage}__indicator`} aria-hidden="true">
          !
        </div>
        <div className={`${classErrorPage}__content`}>
          <p className={`${classErrorPage}__label`}>Application error</p>
          <h1 className={`${classErrorPage}__title`} id={`${classErrorPage}__title`}>
            Something went wrong
          </h1>
          <p className={`${classErrorPage}__description`}>
            We ran into an unexpected problem. Please try again, or head back home.
          </p>
          <div className={`${classErrorPage}__actions`}>
            <button
              className={`${classErrorPage}__action ${classErrorPage}__action--secondary`}
              onClick={() => navigate(0)}
              type="button"
            >
              Try again
            </button>
            <Link
              className={`${classErrorPage}__action ${classErrorPage}__action--primary`}
              to="/"
            >
              Go to homepage
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ErrorPage;