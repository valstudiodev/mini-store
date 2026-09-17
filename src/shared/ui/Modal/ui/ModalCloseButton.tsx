import { ModalCloseButtonProps } from "../model/types";

export default function ModalCloseButton({ title, onClick }: ModalCloseButtonProps): React.JSX.Element {
  return (
    <button type="button"
      onClick={onClick}
      className="absolute top-5 
            right-5 cursor-pointer 
            bg-amber-900 rounded-xl hover:bg-amber-800
            hover-base py-1 px-2">
      {title}
    </button>
  )
}