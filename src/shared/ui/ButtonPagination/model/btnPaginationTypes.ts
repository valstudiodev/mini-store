export interface ButtonPaginationProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
  variant: ButtonPagination;
  onClick: () => void;
}

type ButtonPagination = 'previous' | 'next' | 'current'