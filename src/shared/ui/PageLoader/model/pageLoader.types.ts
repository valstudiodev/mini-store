export interface PageLoaderProps {
  size?: number;
  overlay?: boolean;
  className?: string;
  duration?: number;
  onComplete?: () => void;
}