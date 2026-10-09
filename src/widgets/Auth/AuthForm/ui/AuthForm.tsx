import GoogleAuthButton from "@/features/auth/google/ui/GoogleAuthButton";
import { AuthFormValues, ModeType, RequestStatus } from "../../AuthModal/model/auth-modal.types";
import '../styles/auth-form.scss';

interface AuthFormProps {
  setMode: React.Dispatch<React.SetStateAction<ModeType>>;
  isSignUp: boolean;
  formValues: AuthFormValues;
  className?: string;
  error: string | null;
  status: RequestStatus;

  handleGoogleSignIn: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

function AuthForm({
  setMode,
  isSignUp,
  formValues,
  handleChange,
  handleSubmit,
  handleGoogleSignIn,
  error,
  status,
  className = ''
}: AuthFormProps): React.JSX.Element {
  const authForm = 'auth-form'

  const isLoading = status === 'loading'

  return (
    <form
      onSubmit={handleSubmit}
      className={`${authForm} ${className}`}
    >
      <div className={`${authForm}__wrap`}>
        <label
          className={`${authForm}__label`}
          htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formValues.email}
          onChange={handleChange}
          className={`${authForm}__input`}
        />
      </div>

      <div className={`${authForm}__wrap`}>
        <label
          className={`${authForm}__label`}
          htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          value={formValues.password}
          onChange={handleChange}
          className={`${authForm}__input`}
        />
      </div>

      {isSignUp && (
        <div className={`${authForm}__wrap`}>
          <label
            className={`${authForm}__label`}
            htmlFor="confirmPassword">Confirm password</label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={formValues.confirmPassword}
            onChange={handleChange}
            className={`${authForm}__input`}
          />
        </div>
      )}

      {error !== null && (
        <p>{error}</p>
      )}

      <button
        type="submit"
        className={`${authForm}__btn ${authForm}__btn--submit`}
        disabled={isLoading}
      >
        {isSignUp ? 'Sign Up' : 'Login'}
      </button>

      <GoogleAuthButton
        disabled={isLoading}
        onClick={handleGoogleSignIn}
      >
        Continue with Google
      </GoogleAuthButton>

      {isSignUp ? (
        <div className={`${authForm}__sign-up`}>
          <span>Already have an account?</span>

          <button
            type="button"
            onClick={() => setMode('login')}
            className={`${authForm}__btn-login`}
          >
            Login
          </button>
        </div>

      ) : (
        <div className={`${authForm}__login`}>
          <span>Do not have an account?</span>

          <button
            type="button"
            onClick={() => setMode('signup')}
            className={`${authForm}__btn-signup`}
          >
            Sign Up
          </button>
        </div>
      )}

    </form>
  );
}

export default AuthForm;