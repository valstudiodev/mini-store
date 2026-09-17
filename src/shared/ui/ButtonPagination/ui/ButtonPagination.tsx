import { ButtonPaginationProps } from "../model/btnPaginationTypes";

function ButtonPagination({
  className = '',
  children,
  variant,
  onClick,
  ...props
}: ButtonPaginationProps) {
  const classButtonPagination = 'button-pagination'

  return (
    <button
      {...props}
      className={`
        ${classButtonPagination} 
        ${classButtonPagination}--${variant}
        ${className}
        `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default ButtonPagination;