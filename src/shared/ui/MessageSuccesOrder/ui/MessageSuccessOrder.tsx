import { useNavigate } from 'react-router';
import '../styles/styles.scss';
import { routeMap } from '@/app/routes/routeMap';

function MessageSuccessOrder(): React.JSX.Element {
  const messageSuccessOrder = 'msg-success-order'

  const navigate = useNavigate()

  return (
    <div
      className={`${messageSuccessOrder}__message`}
      role="dialog"
      aria-modal="true"
      aria-labelledby={`${messageSuccessOrder}__message-title`}
      aria-describedby={`${messageSuccessOrder}__message-description`}
    >
      <section className={`${messageSuccessOrder}__message-card`}>
        <span className={`${messageSuccessOrder}__message-icon`} aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="m7 12.5 3.2 3.2L17.5 8"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </span>
        <h2
          id={`${messageSuccessOrder}__message-title`}
          className={`${messageSuccessOrder}__message-title`}
        >
          Your order is confirmed
        </h2>
        <p
          id={`${messageSuccessOrder}__message-description`}
          className={`${messageSuccessOrder}__message-description`}
        >
          Thank you for shopping with us. We’ve received your order and will
          begin processing it shortly.
        </p>
        <div className={`${messageSuccessOrder}__message-reference`}>
          <span>Order reference</span>
          <strong>{messageSuccessOrder}</strong>
          <small>Keep this number for your records.</small>
        </div>
        <button
          className={`${messageSuccessOrder}__message-action`}
          type="button"
          autoFocus
          onClick={() => navigate(routeMap.home.path)}
        >
          Continue shopping
        </button>
      </section>
    </div>
  );
}

export default MessageSuccessOrder;