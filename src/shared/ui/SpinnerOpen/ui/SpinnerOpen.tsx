// Loader.tsx
import React from 'react';
import { LoaderProps } from "../model/types";
import '../model/spinnerOpenStyles.scss';

function SpinnerOpen({
  isLoading = true,
  size = 'medium',
  overlay = false,
  label = 'Loading...',
  className = '',
  children,
}: LoaderProps): React.JSX.Element {
  if (!isLoading) {
    return <>{children || null}</>;
  }

  const loaderClasses = [
    'loader',
    `loader--${size}`,
    overlay ? 'loader--overlay' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const spinner = (
    <div className={loaderClasses} role="status" aria-label={label}>
      <svg className="loader__svg" viewBox="0 0 50 50">
        <circle
          className="loader__circle"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="4"
        />
      </svg>
    </div>
  );

  if (children && overlay) {
    return (
      <div className="loader-wrapper">
        {children}
        {spinner}
      </div>
    );
  }

  return spinner;
}

export default SpinnerOpen