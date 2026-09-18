// 1. Розширюємо CSSProperties, щоб React дозволяв кастомні CSS-змінні (CSS Variables)
import { CSSProperties, ElementType } from 'react';

export interface CustomCSSProperties extends CSSProperties {
  '--duration'?: string;
  '--stagger'?: string;
  '--i'?: number;
}

// 2. Визначаємо інтерфейс Props для компонента
export interface AnimatedTextProps {
  /** Текст, який буде анімуватися */
  text: string;
  /** HTML-тег, у який буде загорнуто текст (наприклад: 'h1', 'h2', 'p', 'span') */
  as?: ElementType;
  /** Додаткові CSS класи */
  className?: string;
  /** Затримка між появою кожної літери (в секундах) */
  staggerDelay?: number;
  /** Тривалість анімації однієї літери (в секундах) */
  duration?: number;
  /** Затримка перед початком анімації всього блоку (в мілісекундах) */
  animationDelay?: number;
}