import { useEffect, useState } from 'react';
import '../styles/pageLoader.scss';
import type { PageLoaderProps } from '../model/pageLoader.types';

function PageLoader({
  size = 120,
  overlay = true,
  className = '',
  duration = 2000,
  onComplete,
}: PageLoaderProps): React.JSX.Element {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const startTime = Date.now();
    let animationFrameId = 0;

    const updateProgress = (): void => {
      const elapsed = Date.now() - startTime;
      const nextProgress = Math.min(
        100,
        (elapsed / duration) * 100,
      );

      setProgress(nextProgress);

      if (nextProgress < 100) {
        animationFrameId = requestAnimationFrame(updateProgress);
      } else {
        onComplete?.();
      }
    };

    animationFrameId = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [duration, onComplete]);

  const loaderClass = [
    'page-loader',
    overlay && 'page-loader--overlay',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const percentage = Math.floor(progress);

  return (
    <div className={loaderClass}>
      <div
        className="page-loader__content"
        style={{ width: size }}
        role="status"
        aria-label={`Loading: ${percentage}%`}
        aria-live="polite"
      >
        <div
          className="page-loader__track"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={percentage}
        >
          <div
            className="page-loader__bar"
            style={{ width: `${progress}%` }}
          />
        </div>

        <span className="page-loader__percentage">
          {percentage}%
        </span>
      </div>
    </div>
  );
}

export default PageLoader;