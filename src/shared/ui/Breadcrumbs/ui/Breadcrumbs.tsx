import { Link, UIMatch, useMatches } from 'react-router';
import '../styles/breadcrumbs.scss';


export interface RouteMeta {
  isInMenu?: boolean;
  title: string;
}

export interface RouteHandle {
  breadcrumb?: string;
  title?: string;
}

function useAppMatches(): UIMatch<unknown, RouteHandle>[] {
  return useMatches() as UIMatch<unknown, RouteHandle>[];
}


function Breadcrumbs(): React.JSX.Element | null {
  const breadcrumbs = 'breadcrumbs';

  const matches = useAppMatches();
  const currentMatch = matches[matches.length - 1];

  if (currentMatch.id === 'home-page') {
    return null;
  }

  const currentPage = currentMatch.handle?.breadcrumb;

  const currentTitle = currentMatch.handle?.title

  if (!currentPage) {
    return null;
  }

  return (
    <article className={`${breadcrumbs}`}>
      <h1 className={`${breadcrumbs}__title`}>
        {currentTitle}
      </h1>
      <nav
        aria-label="Breadcrumb"
        className={`${breadcrumbs}__nav`}
      >
        <ul className={`${breadcrumbs}__list`}>
          <li className={`${breadcrumbs}__item`}>
            <Link
              className={`${breadcrumbs}__link`}
              to="/">
              Home
            </Link>
          </li>

          <li className={`${breadcrumbs}__item`}>
            <span aria-hidden='true'>&gt;</span>

            <span
              className={`${breadcrumbs}__active`}
              aria-current="page">
              {currentPage}
            </span>
          </li>
        </ul>
      </nav >
    </article>

  );
}

export default Breadcrumbs;