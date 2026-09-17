import React from 'react';

export interface NavigateButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  to?: 'back' | 'forward' | number | string;
  fallbackHref?: string;
  onNavigate?: (href: string) => void;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  children?: React.ReactNode;
}

const NavigateButton: React.FC<NavigateButtonProps> = ({
  to = 'back',
  fallbackHref,
  onNavigate,
  variant = 'ghost',
  children,
  className = '',
  onClick,
  ...props
}) => {
  const getDelta = (): number => {
    if (to === 'back') return -1;
    if (to === 'forward') return 1;

    return to as number;
  };

  const handleNavigate = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    onClick?.(event);

    if (event.defaultPrevented) return;

    // Якщо to — конкретний шлях, передаємо його в fallback-навігацію.
    if (typeof to === 'string' && to !== 'back' && to !== 'forward') {
      onNavigate?.(to);
      return;
    }

    const delta = getDelta();

    const hasHistory =
      typeof window !== 'undefined' && window.history.length > 1;

    if (hasHistory) {
      window.history.go(delta);
    } else if (fallbackHref) {
      onNavigate?.(fallbackHref) ??
        (window.location.href = fallbackHref);
    }
  };

  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
    ghost: 'text-gray-600 hover:text-gray-900 hover:bg-gray-100',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50',
  };

  const combinedClasses = `inline-flex items-center gap-2 px-3 
    py-1.5 rounded-md text-sm font-medium transition-colors cursor-pointer 
    ${variantStyles[variant]} ${className}`.trim();

  return (
    <button
      type="button"
      onClick={handleNavigate}
      className={combinedClasses}
      {...props}
    >
      {children ||
        (to === 'forward'
          ? 'Next →'
          : to === 'back'
            ? '← Back'
            : 'Navigate')}
    </button>
  );
};

export default NavigateButton