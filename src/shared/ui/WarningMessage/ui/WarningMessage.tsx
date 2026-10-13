import '../styles/warning-message.scss';

interface WarningMessageProps {
  className?: string,
  text: string
}

function WarningMessage({
  className = '',
  text
}: WarningMessageProps): React.JSX.Element {
  const warningMessage = 'warning-message'

  return (
    <div
      className={[warningMessage, className].filter(Boolean).join(' ')}
      role="status"
    >
      <span className={`${warningMessage}__icon`} aria-hidden="true">
        !
      </span>
      <p className={`${warningMessage}__text`}>
        {text}
      </p>
    </div>
  );
}

export default WarningMessage;
