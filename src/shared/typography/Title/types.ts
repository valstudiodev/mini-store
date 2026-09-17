export type TitleTag =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'span'
  | 'div'

export type TitleSize =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

export interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /** HTML-тег, який буде відрендерено у DOM (SEO/Семантика) */
  as?: TitleTag;
  /** Візуальний розмір заголовка (якщо не вказано, відповідає пропу 'as') */
  size?: TitleSize;
  /** Вміст заголовка */
  children: React.ReactNode;
}