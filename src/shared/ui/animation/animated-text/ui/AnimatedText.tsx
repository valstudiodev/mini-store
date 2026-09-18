import "../styles/animated-text.scss";
import { useEffect, useRef } from "react";
import { CustomCSSProperties, AnimatedTextProps } from "../model/animated-types";

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  as: Component = 'h1',
  className = '',
  staggerDelay = 0.04,
  duration = 0.8,
  animationDelay = 100,
}) => {
  // Типізуємо Ref як HTMLElement, оскільки тег може змінюватися
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (containerRef.current) {
        containerRef.current.classList.add('reveal');
      }
    }, animationDelay);

    return () => clearTimeout(timer);
  }, [animationDelay, text]);

  // Розбиваємо текст на масив символів
  const characters = text.split('');

  // Кастомний об'єкт стилів для контейнера
  const containerStyle: CustomCSSProperties = {
    '--duration': `${duration}s`,
    '--stagger': `${staggerDelay}s`,
  };

  return (
    <Component
      ref={containerRef}
      className={`animated-text ${className}`}
      style={containerStyle}
    >
      {characters.map((char, index) => {
        // Стилі для кожної окремої літери
        const charStyle: CustomCSSProperties = {
          '--i': index,
        };

        return (
          <span
            key={`${char}-${index}`}
            className={char === ' ' ? 'space' : 'char'}
            style={charStyle}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        );
      })}
    </Component>
  );
};