import '../styles/linkButton.scss';

import { Link } from 'react-router-dom';
import type { LinkProps } from 'react-router-dom';
import { LinkButtonProps } from '../model/types';

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
  as: Component = Link,
  className = '',
  'aria-label': ariaLabel,
  ...props
}: LinkButtonProps): React.JSX.Element {
  const clLinkButton = 'link-button';

  // Визначаємо зовнішні посилання.
  const isExternal =
    external ??
    /^(https?:\/\/|\/\/)/i.test(href);

  const activeVariant =
    iconOnly && variant === 'primary'
      ? 'unstyled'
      : variant;

  const combinedClasses = [
    clLinkButton,
    `${clLinkButton}--${activeVariant}`,
    `${clLinkButton}--${size}`,
    disabled ? 'is-disabled' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const content = iconOnly ? (
    iconOnly
  ) : (
    <>
      {leftIcon && (
        <span
          className={`${clLinkButton}__icon`}
          aria-hidden="true"
        >
          {leftIcon}
        </span>
      )}

      {children && <span>{children}</span>}

      {rightIcon && (
        <span
          className={`${clLinkButton}__icon`}
          aria-hidden="true"
        >
          {rightIcon}
        </span>
      )}
    </>
  );

  // Disabled: не дозволяємо навігацію.
  if (disabled) {
    return (
      <span
        className={combinedClasses}
        aria-disabled="true"
        aria-label={ariaLabel}
      >
        {content}
      </span>
    );
  }

  // Зовнішнє посилання.
  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedClasses}
        aria-label={ariaLabel}
        {...props}
      >
        {content}
      </a>
    );
  }

  // Внутрішня навігація через React Router.
  if (Component === 'a') {
    return (
      <a
        href={href}
        className={combinedClasses}
        aria-label={ariaLabel}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      to={href}
      className={combinedClasses}
      aria-label={ariaLabel}
      {...(props as Omit<LinkProps, 'to'>)}
    >
      {content}
    </Link>
  );
}

export default LinkButton;



