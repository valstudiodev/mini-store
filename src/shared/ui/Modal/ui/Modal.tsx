import { ModalProps } from "../model/types";
import { useEffect } from "react";
import { ModalHeader, ModalContent, ModalCloseButton } from "./index";

export default function Modal({ title, isOpen, onClose, className, children }: ModalProps): React.JSX.Element {

  useEffect(() => {
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth

    if (isOpen) {
      document.body.classList.add('scroll-lock')
      document.body.style.paddingRight = `${scrollBarWidth}px`
    }

    return () => {
      document.body.classList.remove('scroll-lock')
      document.body.style.paddingRight = ''
    };
  }, [isOpen]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent): void {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    };
  }, [isOpen, onClose]);


  return (
    <>
      {isOpen && (
        <div className="overlay modal-overlay" onClick={onClose}>
          <div className={className}
            onClick={(e) => e.stopPropagation()}>
            <ModalHeader title={title} />
            <ModalContent>
              {children}
            </ModalContent>
            <ModalCloseButton title="Close" onClick={onClose} />
          </div>
        </div>
      )}
    </>
  )
}