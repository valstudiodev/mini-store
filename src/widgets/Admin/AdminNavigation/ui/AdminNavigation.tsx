import { Link, NavLink } from 'react-router';
import { linksNavigations } from '../model/admin-nav.data';
import '../styles/admin-navigation.scss';
import { routeMap } from '@/app/routes/routeMap';

function AdminNavigation(): React.JSX.Element {
  const adminNavigation = 'admin-navigation'

  const styleActive = [
    'text-amber-300'
  ]

  return (
    <nav className={adminNavigation}>
      <ul className={`${adminNavigation}__list`}>
        {linksNavigations.map((link) => (
          <li
            className={`${adminNavigation}__item`}
            key={link.id}>
            <NavLink
              className={({ isActive }) => isActive ? `${styleActive}` : ''}
              to={`${link.path}`}>
              {link.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <Link
        className={`${adminNavigation}__link-back`}
        to={routeMap.admin.path}>
        Back
      </Link>
    </nav>
  );
}

export default AdminNavigation;

