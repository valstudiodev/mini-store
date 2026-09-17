import { useState } from "react";

interface UseModalReturn {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

function useModal(): UseModalReturn {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function open(): void {
    setIsOpen(true)
  }

  function close(): void {
    setIsOpen(false)
  }

  return {
    isOpen,
    open,
    close
  }
}

export default useModal