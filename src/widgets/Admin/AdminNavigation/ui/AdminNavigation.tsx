import { Link, NavLink } from 'react-router';
import { linksNavigations } from '../model/admin-nav.data';
import '../styles/admin-navigation.scss';
import { routeMap } from '@/app/routes/routeMap';

function AdminNavigation(): React.JSX.Element {
  const adminNavigation = 'admin-navigation'

  return (
    <nav className={adminNavigation} aria-label="Admin navigation">
      <ul className={`${adminNavigation}__list`}>
        {linksNavigations.map((link) => (
          <li
            className={`${adminNavigation}__item`}
            key={link.id}>
            <NavLink
              className={({ isActive }) => `${adminNavigation}__link ${isActive ? ` ${adminNavigation}__link--active` : ''}`}
              to={`${link.path}`}>
              {link.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className={`${adminNavigation}__actions`}>
        <Link
          className={`${adminNavigation}__link-back`}
          to={routeMap.admin.path}>
          Back
        </Link>
        <Link
          className={`${adminNavigation}__link-home`}
          to={routeMap.home.path}
        >
          Home
        </Link>
      </div>
    </nav>
  );
}

export default AdminNavigation;

