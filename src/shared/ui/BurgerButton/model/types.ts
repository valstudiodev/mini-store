export interface IconMenuProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Стан відкриття меню */
  isOpen: boolean;
  /** Ширина кнопки (наприклад, '30px' або 30) */
  width?: string | number;
  /** Висота кнопки (наприклад, '20px' або 20) */
  height?: string | number;
  /** Колір ліній */
  color?: string;
  /** Закруглення ліній */
  radius?: string | number;
  /** Ширина середньої лінії (span) */
  widthSpan?: string | number;
  /** Товщина ліній */
  heightLine?: string | number;
  /** Функція кліку/перемикання */
  onToggle?: () => void;
  /** Опис для screen readers */
  'aria-label'?: string;
}