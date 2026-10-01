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
// import LinkButton from '@/shared/ui/LinkButton/ui/LInkButton';
import { useAppSelector } from '@/app/store/hooks';
import { selectCartTotalQuantity } from '@/entities/cart/model/cartSelector';
import { MenuRoute } from '@/app/routes/route-types';
import AuthModal from '@/widgets/Authorization/AuthModal/ui/AuthModal';
import { useAuth } from '@/app/providers/useAuth';
import { logout } from '@/features/auth/logout/model/logout';
import { LogOut } from "lucide-react";


function MainMenu({
  className = ''
}: MainMenuProps): React.JSX.Element {
  const classMainMenu = 'main-menu'

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);

  const totalQuantity = useAppSelector(selectCartTotalQuantity)

  const { user } = useAuth()

  useEffect(() => {
    document.documentElement.dataset.menuOpen = String(isMenuOpen)

    return () => {
      delete document.documentElement.dataset.menuOpen
    };
  }, [isMenuOpen]);

  const toggleMenu = (): void => {
    setIsMenuOpen((prev) => !prev)
  }

  const menuItems = (routes[0]?.children as MenuRoute[]).filter(
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

        {user ? (
          <>
            <span className='text-x'>{user.email}</span>

            <button onClick={() => logout()}>
              <span>
                <LogOut size={22} />
              </span>
            </button>
          </>
        ) : (
          <>
            <ButtonBase
              onClick={() => setIsAuthModalOpen(true)}
            >
              <User
                className={`${classMainMenu}__icon`}
                size={18}
              />
            </ButtonBase>
          </>
        )}

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

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </nav>
  );
}

export default MainMenu;