import '../styles/page404.scss';
import { Link, useNavigate } from 'react-router';

function Page404(): React.JSX.Element {
  const classPage404 = 'page-404';
  const navigate = useNavigate();

  return (
    <section className={classPage404} aria-labelledby={`${classPage404}__title`}>
      <div className={`${classPage404}__content`}>
        <p className={`${classPage404}__eyebrow`}>Oops! We couldn't find that page</p>
        <h1 className={`${classPage404}__code`} aria-label="Error 404">404</h1>
        <h2 className={`${classPage404}__title`} id={`${classPage404}__title`}>
          Page not found
        </h2>
        <p className={`${classPage404}__description`}>
          The page may have moved, or the link you followed may be broken.
        </p>
        <div className={`${classPage404}__actions`}>
          <button
            className={`${classPage404}__button ${classPage404}__button--secondary`}
            onClick={() => navigate(-1)}
            type="button"
          >
            Go back
          </button>
          <Link
            className={`${classPage404}__button ${classPage404}__button--primary`}
            to="/"
          >
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Page404;