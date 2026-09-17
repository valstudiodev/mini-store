import { ModalContentProps } from "../model/types"

export default function ModalContent({ children }: ModalContentProps): React.JSX.Element {
  return (
    <div
      role="dialog"
      aria-modal='true'
      className="modal__content bg-bg-dark-light
    p-4">
      {children}
    </div>
  )
}