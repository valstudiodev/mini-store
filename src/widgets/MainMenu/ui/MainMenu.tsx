import { routes } from '@/app/routes/routes';
import '../styles/mainMenu.scss';
import { Link, NavLink } from 'react-router';
import { MainMenuProps } from '../model/mainMenuTypes';
import { Search, User, ShoppingCart } from "lucide-react";
import ButtonBase from '@/shared/ui/ButtonBase/ui/ButtonBase';
import { useEffect, useState } from 'react';
import MobileMenu from '@/shared/ui/BurgerButton/ui/MobileMenu';
import Logo from '@/shared/typography/Logo/Logo';
import { routeMap } from '@/app/routes/routeMap';
import LinkButton from '@/shared/ui/LinkButton/ui/LInkButton';
import { useAppSelector } from '@/app/store/hooks';
import { selectCartTotalQuantity } from '@/entities/cart/model/cartSelector';


function MainMenu({
  className = ''
}: MainMenuProps): React.JSX.Element {
  const classMainMenu = 'main-menu'

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const totalQuantity = useAppSelector(selectCartTotalQuantity)

  useEffect(() => {
    document.documentElement.dataset.menuOpen = String(isMenuOpen)

    return () => {
      delete document.documentElement.dataset.menuOpen
    };
  }, [isMenuOpen]);

  const toggleMenu = (): void => {
    setIsMenuOpen((prev) => !prev)
  }

  const menuItems = routes[0].children.filter(
    (route) => route?.meta?.isInMenu
  ) ?? []

  const closeMenu = (): void => {
    setIsMenuOpen(false)
  }

  return (
    <nav className={`${classMainMenu} ${className}`}>
      <Logo />
      <ul className={`${classMainMenu}__list`}>
        {menuItems.map((route) => {
          const path = route.index ? '/' : route.path

          return (
            <li
              key={route.id}
              className={`${classMainMenu}__item`}
            >
              <NavLink
                to={path ?? ''}
                onClick={closeMenu}
                className={({ isActive }) => `${classMainMenu}__link ${isActive ? 'is-active' : ''}`}
              >
                {route?.meta?.title}
              </NavLink>
            </li>
          )
        })}
      </ul>

      <div className={`${classMainMenu}__actions`}>
        <ButtonBase>
          <Search
            className={`${classMainMenu}__icon`}
            size={18} />
        </ButtonBase>
        <LinkButton
          href={routeMap.admin.path}
          variant='unstyled'
          size='none'
        >
          <User
            className={`${classMainMenu}__icon`}
            size={18}
          />
        </LinkButton>
        <Link
          to={`${routeMap.cart.path}`}
        >
          <ButtonBase>
            <ShoppingCart
              className={`${classMainMenu}__icon`}
              size={18} />
          </ButtonBase>
          <span>({totalQuantity})</span>
        </Link>
      </div>


      <MobileMenu
        isOpen={isMenuOpen}
        onToggle={toggleMenu}
      />
    </nav>
  );
}

export default MainMenu;