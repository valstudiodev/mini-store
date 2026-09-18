import { AnchorHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router";

export type LinkButtonProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  'href'
> & {
  href: string;
  children?: ReactNode;
  iconOnly?: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  variant?: 'primary' | 'secondary' | 'unstyled';
  size?: 'none' | 'small' | 'medium' | 'large';
  external?: boolean;
  disabled?: boolean;
  as?: 'a' | typeof Link;
};


// export interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
//   /** URL для переходу */
//   href: string;
//   /** Вміст кнопки (текст/елементи) */
//   children: React.ReactNode;
//   /** Іконка, якщо компонент рендериться ТІЛЬКИ як іконка-посилання */
//   iconOnly?: React.ReactNode;
//   /** Іконка для рендеру з лівого боку */
//   leftIcon?: React.ReactNode;
//   /** Іконка для рендеру з правого боку */
//   rightIcon?: React.ReactNode;
//   /** Варіант стилізації */
//   variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'unstyled';
//   /** Розмір кнопки */
//   size?: 'sm' | 'md' | 'lg' | 'none';
//   /** Чи є посилання зовнішнім (за дефолтом визначається автоматично) */
//   external?: boolean;
//   /** Стан блокування кнопки */
//   disabled?: boolean;
//   /** Кастомний компонент роутера (наприклад, Next.js Link або React Router Link) */
//   as?: React.ElementType;
// }

