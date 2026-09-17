export type LoaderSize = 'small' | 'medium' | 'large';

export interface LoaderProps {
  isLoading?: boolean;
  size?: LoaderSize;
  overlay?: boolean;
  label?: string;
  className?: string;
  children?: React.ReactNode;
}