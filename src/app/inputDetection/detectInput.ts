import { INPUT_TYPES } from "./constants";
import { InputType } from "./types";

export const detectInputType = (
  e: PointerEvent | KeyboardEvent,
): InputType | null => {
  if (e instanceof KeyboardEvent) {
    // Ігноруємо системні клавіші або modifier keys (Alt, Shift, Ctrl тощо)
    if (e.metaKey || e.ctrlKey || e.altKey) return null;
    return INPUT_TYPES.KEYBOARD;
  }

  if (e instanceof PointerEvent) {
    switch (e.pointerType) {
      case 'mouse':
        return INPUT_TYPES.MOUSE;

      case 'touch':
      case 'pen':
        return INPUT_TYPES.TOUCH;

      default:
        return null;
    }
  }

  return null;
};