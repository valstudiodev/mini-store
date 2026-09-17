import { LinkButtonProps } from "../model/types";
import '../styles/linkButton.scss';

function LinkButton({
  href,
  children,
  iconOnly,
  leftIcon,
  rightIcon,
  variant = 'primary',
  size = 'none',
  external,
  disabled = false,
  as: Component = 'a',
  className = '',
  'aria-label': ariaLabel,
  ...props
}: LinkButtonProps) {
  const clLinkButton = 'link-button'

  const isExternal = external ?? (href.startsWith('http://') || href.startsWith('htpps://') || href.startsWith('//'))

  // Якщо передано iconOnly, автоматично ставимо variant="unstyled" (якщо не вказано інший)
  const activeVariant = iconOnly ? (variant === 'primary' ? 'unstyled' : variant) : variant;

  const combinedClasses = `
    ${clLinkButton}
    ${clLinkButton}--${activeVariant}
    ${activeVariant !== 'unstyled' ? `link-button--${size}` : ''}
    ${clLinkButton}--${size}
    ${disabled ? 'is-disabled' : ''}
    ${className} 
  `.trim()

  // const renderIcon = (icon: React.ReactNode, position: 'left' | 'right') => (
  //   <span
  //     className={`${clLinkButton}__icon ${clLinkButton}__icon--${position}`}
  //     aria-hidden='true'
  //   >
  //     {icon}
  //   </span>
  // )

  // Вміст: або одиночна іконка, або стандартний текст з іконками
  const content = iconOnly ? (
    iconOnly
  ) : (
    <>
      {leftIcon && <span className="link-button__icon">{leftIcon}</span>}
      {children && <span>{children}</span>}
      {rightIcon && <span className="link-button__icon">{rightIcon}</span>}
    </>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedClasses}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : undefined}
        {...props}
      >
        {content}
      </a>
    )
  }

  return (
    <Component
      href={href}
      className={combinedClasses}
      aria-disabled={disabled ? -1 : undefined}
      {...props}
    >
      {content}
    </Component>
  );
}

export default LinkButton;



