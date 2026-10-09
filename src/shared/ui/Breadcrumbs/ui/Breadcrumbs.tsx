import { Link, UIMatch, useMatches } from 'react-router';
import '../styles/breadcrumbs.scss';
import { Title } from '@/shared/typography';
import { useTranslation } from 'react-i18next';


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

  const { t } = useTranslation()

  const matches = useAppMatches();
  const currentMatch = matches[matches.length - 1];

  if (currentMatch.id === 'home-page') {
    return null;
  }

  const currentPage = currentMatch.handle?.breadcrumb;

  const currentTitle = currentMatch.handle?.title

  if (!currentPage || !currentTitle) {
    return null;
  }

  return (
    <article className={`${breadcrumbs}`}>
      <Title
        className={`${breadcrumbs}__title`}
        as='h1'
      >
        {t(currentTitle)}
      </Title>
      <nav
        aria-label="Breadcrumb"
        className={`${breadcrumbs}__nav`}
      >
        <ul className={`${breadcrumbs}__list`}>
          <li className={`${breadcrumbs}__item`}>
            <Link
              className={`${breadcrumbs}__link`}
              to="/">
              {t('breadcrumbs.home')}
            </Link>
          </li>

          <li className={`${breadcrumbs}__item`}>
            <span aria-hidden='true'>&gt;</span>

            <span
              className={`${breadcrumbs}__active`}
              aria-current="page">
              {t(currentPage)}
            </span>
          </li>
        </ul>
      </nav >
    </article>

  );
}

export default Breadcrumbs;