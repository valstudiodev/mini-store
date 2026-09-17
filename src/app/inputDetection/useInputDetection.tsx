import { detectInputType } from "./detectInput";
import { useEffect } from "react";
import { InputType } from "./types";
import { detectInitialInputType } from "./detectInitialInputType";

export const useInputDetection = (): void => {
  useEffect(() => {
    const root = document.documentElement;
    let currentInput: InputType | null = null;

    const setInput = (type: InputType): void => {
      if (currentInput === type) return;
      currentInput = type;
      root.dataset.input = type;
    };

    // 1. Установлюємо початковий стан одразу при маунті
    setInput(detectInitialInputType());

    const handleInput = (event: PointerEvent | KeyboardEvent): void => {
      const inputType = detectInputType(event);
      if (!inputType) return;

      setInput(inputType);
    };

    // 2. Додаємо pointermove для визначення миші без обов'язкового кліку
    window.addEventListener('pointerdown', handleInput, { passive: true });
    window.addEventListener('pointermove', handleInput, { passive: true });
    window.addEventListener('keydown', handleInput, { passive: true });

    return () => {
      window.removeEventListener('pointerdown', handleInput);
      window.removeEventListener('pointermove', handleInput);
      window.removeEventListener('keydown', handleInput);

      delete root.dataset.input;
    };
  }, []);
};