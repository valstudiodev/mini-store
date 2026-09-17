import { InputType } from "./types";
import { INPUT_TYPES } from "./constants";

export const detectInitialInputType = (): InputType => {
  // Перевірка підтримки точного вказівника (миші)
  if (window.matchMedia('(pointer: fine)').matches) {
    return INPUT_TYPES.MOUSE;
  }

  // Перевірка сенсорного екрану
  if (window.matchMedia('(pointer: coarse)').matches) {
    return INPUT_TYPES.TOUCH;
  }

  return INPUT_TYPES.MOUSE;
};