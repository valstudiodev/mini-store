import { ModalCloseButtonProps } from "../model/types";
import { X } from "lucide-react";

export default function ModalCloseButton({
  title,
  onClick,
  className,
  ariaLabel
}: ModalCloseButtonProps): React.JSX.Element {
  const closeBtn = 'close-btn'

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${closeBtn} ${className}`}
      aria-label={ariaLabel}
    >
      {title}
      <span>
        <X size={26} />
      </span>
    </button>
  )
}

