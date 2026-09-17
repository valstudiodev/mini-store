import { TitleProps } from "./types";


function Title({
  as: Component = 'h2',
  size,
  children,
  className = '',
  ...props
}: TitleProps) {
  const clTitle = 'title'

  // Якщо розмір не передано явно, використовуємо значення 'as' (якщо це h1-h6) або h2 за замовчуванням
  const visualSize = size || (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(Component) ? Component : 'h2');

  const combinedClasses = `
    ${clTitle} 
    ${clTitle}--${visualSize} 
    ${className}
  `.trim();

  return (
    <Component className={combinedClasses} {...props}>
      {children}
    </Component>
  );
}

export default Title;