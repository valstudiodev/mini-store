import useToast from '../model/useToast';
import '../styles/toast.scss';

interface ToastProps {
  className?: string;
}

function Toast({
  className
}: ToastProps) {
  const clToast = 'toast'

  const { state } = useToast()

  const classType = state?.type

  if (!state) return null

  return (
    <div className={`${clToast} ${clToast}--${classType} ${className}`}>
      <p>{state.message}</p>
    </div>
  )
}

export default Toast;