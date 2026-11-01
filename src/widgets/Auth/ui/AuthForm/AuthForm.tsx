import GoogleAuthButton from "@/features/auth/google/ui/GoogleAuthButton";
import { AuthFormValues, AuthMode, RequestStatus } from "../../model/auth-modal.types";
import './auth-form.scss';
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface AuthFormProps {
  isSignUp: boolean;
  register: UseFormRegister<AuthFormValues>;
  errors: FieldErrors<AuthFormValues>;
  className?: string;
  error: string | null;
  status: RequestStatus;

  handleGoogleSignIn: () => void;
  handleModeChange: (mode: AuthMode) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

function AuthForm({
  isSignUp,
  errors,
  register,
  handleSubmit,
  handleGoogleSignIn,
  handleModeChange,
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
          type="email"
          disabled={isLoading}
          autoComplete="email"
          {...register('email')}
          className={`${authForm}__input`}
        />
        {errors.email && (
          <p className={`${authForm}__error`}>
            {errors.email.message}
          </p>
        )}
      </div>

      <div className={`${authForm}__wrap`}>
        <label
          className={`${authForm}__label`}
          htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          disabled={isLoading}
          {...register('password')}
          className={`${authForm}__input`}
        />
        {errors.password && (
          <p className={`${authForm}__error`}>
            {errors.password?.message}
          </p>
        )}
      </div>

      {isSignUp && (
        <div className={`${authForm}__wrap`}>
          <label
            className={`${authForm}__label`}
            htmlFor="confirmPassword">Confirm password</label>
          <input
            id="confirmPassword"
            type="password"
            disabled={isLoading}
            {...register('confirmPassword')}
            className={`${authForm}__input`}
          />
          {errors.confirmPassword && (
            <p className={`${authForm}__error`}>
              {errors.confirmPassword?.message}
            </p>
          )}
        </div>
      )}

      {error !== null && (
        <p className={`${authForm}__error`}>{error}</p>
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
            onClick={() => handleModeChange('login')}
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
            onClick={() => handleModeChange('signup')}
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