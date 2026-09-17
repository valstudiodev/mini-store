import '../styles/message.scss';

type MessageType = 'success' | 'error' | 'info' | 'warning' | null

interface MessageProps {
  variant: MessageType;
  label: string;
  className?: string;
}

function Message({
  variant = null,
  label,
  className = '',
}: MessageProps): React.JSX.Element {
  const message = 'message'

  return (
    <>
      <div className={`${message}__overlay`} aria-hidden='true'></div>

      <div className={`${message} ${message}--${variant} ${className}`}>
        <p className={`${message}__label`}>
          {label}
        </p>
      </div>
    </>

  );
}

export default Message;