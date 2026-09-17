export type SpinnerSize = 'small' | 'medium' | 'large';

export interface SpinnerProps {
  size?: SpinnerSize;
  overlay?: boolean;
  label?: string;
  className?: string;
}