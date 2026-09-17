// Твої константи з макета
const MIN_WIDTH = 320;
const MAX_WIDTH_CONTAINER = 1400;
const CONTAINER_PADDING = 30;
const CONTAINER_WIDTH = MAX_WIDTH_CONTAINER + CONTAINER_PADDING; // 1430

interface AdaptiveOptions {
  widthFrom?: number;
  widthTo?: number;
}

/**
 * Генерує адаптивний інлайн-стиль або значення для Tailwind Arbitrary сітки.
 * Реалізує математику лінійного масштабування через CSS clamp.
 */
export function adaptive(
  property: string,
  startSize: number,
  minSize: number,
  options: AdaptiveOptions = {}
) {
  const from = options.widthFrom ?? CONTAINER_WIDTH;
  const to = options.widthTo ?? MIN_WIDTH;

  const start = startSize === 0 ? 0.000001 : startSize;
  const min = minSize === 0 ? 0.000001 : minSize;

  // Формула плаваючого значення (Slope & Intersection)
  const slope = (start - min) / (from - to);
  let yIntersection = -to * slope + min;
  if (yIntersection === 0) yIntersection = 0.000001;

  const flyValue = `${yIntersection.toFixed(4)}px + ${(slope * 100).toFixed(4)}vw`;

  // Визначаємо межі для clamp залежно від знаку
  const isNegative = min > start;
  const finalMin = isNegative ? start : min;
  const finalMax = isNegative ? min : start;

  const clampExpression = `clamp(${finalMin}px,${flyValue},${finalMax}px)`;

  return { [property]: clampExpression };
}



// ========== using =========
// style={{ ...adaptive('fontSize', 80, 40) }}