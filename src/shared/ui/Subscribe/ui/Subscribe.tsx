import Message from '../../Message/ui/Message';
import useSubscribe from '../model/useSubscribe';
import '../styles/subscribe.scss';

function Subscribe({
  className = ''
}: { className?: string }): React.JSX.Element {
  const subscribeForm = 'subscribe-form'

  const {
    email,
    handleSubmit,
    handleEmailChange,
    status,
    error
  } = useSubscribe()

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    handleSubmit()
  }

  return (
    <form
      className={`${subscribeForm} ${className}`}
      onSubmit={handleFormSubmit}>
      <div className={`${subscribeForm}__body`}>
        <input
          type="email"
          value={email}
          name='email'
          autoComplete='email'
          onChange={(e) => handleEmailChange(e.target.value)}
          placeholder="Your email address here"
          className={`${subscribeForm}__input`}
        />
        <button
          className={`${subscribeForm}__btn`}
          type="submit"
          disabled={status === 'loading'}>
          {status === 'loading' ? 'Submitting...' : 'Subscribe'}
        </button>
      </div>

      {status === 'success' && (
        <Message
          className={`${subscribeForm}__message`}
          label='Thank you for subscribing!'
          variant='success' />
      )}

      {error && (
        <p className={`${subscribeForm}__error`}>{error}</p>
      )}

    </form>
  );
}

export default Subscribe;