import { useEffect } from 'react'
import '../model/modalStyles.scss'

import ModalHeader from './ModalHeader'
import ModalContent from './ModalContent'
import ModalCloseButton from './ModalCloseButton'

import type { ModalProps } from '../model/types'

export default function Modal({
  title,
  isOpen,
  onClose,
  className = '',
  children,
}: ModalProps): React.JSX.Element {
  const modal = 'modal'

  // Lock page scroll while modal is open
  useEffect(() => {
    if (!isOpen) {
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen])

  // Close modal with Escape
  useEffect(() => {
    if (!isOpen) {
      return
    }

    function handleKeyDown(e: KeyboardEvent): void {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) {
    return <></>
  }

  return (
    <>
      <div
        className={`${modal}__overlay`}
        onClick={onClose}
      />

      <div className={`${modal} ${className}`}>
        <ModalHeader title={title} />

        <ModalContent>
          {children}
        </ModalContent>

        <ModalCloseButton
          onClick={onClose}
          ariaLabel='close modal window'
          className={`${modal}__btn-close`}
        />
      </div>
    </>
  )
}