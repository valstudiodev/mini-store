import { routes } from '@/app/routes/routes';
import '../styles/mainMenu.scss';
import { Link, NavLink } from 'react-router';
import { MainMenuProps } from '../model/mainMenuTypes';
import { Search, User, ShoppingCart, SunMoon } from "lucide-react";
import ButtonBase from '@/shared/ui/ButtonBase/ui/ButtonBase';
import { useEffect, useState } from 'react';
import MobileMenu from '@/shared/ui/BurgerButton/ui/MobileMenu';
import Logo from '@/shared/typography/Logo/Logo';
import { routeMap } from '@/app/routes/routeMap';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { selectCartTotalQuantity } from '@/entities/cart/model/cartSelector';
import { MenuRoute } from '@/app/routes/route-types';
import AuthModal from '@/widgets/Auth/AuthModal/ui/AuthModal';
import { logout } from '@/features/auth/logout/model/logout';
import { LogOut, UserShield } from "lucide-react";
import { selectAuthInitialized, selectAuthUser } from '@/features/auth/model/authSelector';
import { openAuthModal } from '@/features/auth/model/authModalSlice';
import ThemeToggle from '@/shared/ui/ThemeToggle/ui/ThemeToggle';

function MainMenu({
  className = ''
}: MainMenuProps): React.JSX.Element {
  const classMainMenu = 'main-menu'

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const dispatch = useAppDispatch()

  const totalQuantity = useAppSelector(selectCartTotalQuantity)

  const user = useAppSelector(selectAuthUser)
  const initialized = useAppSelector(selectAuthInitialized)

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

  if (!initialized) {
    return <div>LOADING MAIN MENU...</div>
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
              onClick={() => dispatch(openAuthModal())}
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

        <Link
          to={routeMap.admin.path}
        >
          <span>
            <UserShield size={22} />
          </span>
        </Link>

        <ThemeToggle
          title="Switch theme"
          className="cursor-pointer
        rounded-full p-2"
        >
          <SunMoon
            size={30}
          />
        </ThemeToggle>
      </div>


      <MobileMenu
        isOpen={isMenuOpen}
        onToggle={toggleMenu}
      />

      <AuthModal />
    </nav>
  );
}

export default MainMenu;