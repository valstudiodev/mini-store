export interface ModalProps {
  title: string;
  isOpen: boolean;
  className?: string;
  onClose: () => void;
  children: React.ReactNode;
}

export interface ModalCloseButtonProps {
  title?: string;
  onClick: () => void;
  ariaLabel?: string;
  className?: string;
}

export interface ModalHeaderProps {
  title: string;
}

export interface ModalContentProps {
  children: React.ReactNode
}