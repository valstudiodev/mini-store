import { Modal } from "@/shared/ui";
import { useState } from "react";
import { AuthFormValues, ModeType, RequestStatus } from "../model/auth-modal.types";
import '../styles/auth-modal.scss';
import AuthForm from "../../AuthForm/ui/AuthForm";
import { login } from "@/features/auth/login/model/login";
import { signUp } from "@/features/auth/signup/model/signup";
import { FirebaseError } from "firebase/app";
import getAuthErrorMessage from "../../AuthMessage/ui/getAuthErrorMessage";
import { googleSignIn } from "@/features/auth/google/model/googleSignIn";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { selectIsAuthModalOpen } from "@/features/auth/model/authSelector";
import { closeAuthModal } from "@/features/auth/model/authModalSlice";

const initialValues: AuthFormValues = {
  email: '',
  password: '',
  confirmPassword: '',
}

function AuthModal() {
  const authModal = 'auth-modal'

  const [mode, setMode] = useState<ModeType>('login');
  const [formValues, setFormValues] = useState<AuthFormValues>(initialValues);

  const [status, setStatus] = useState<RequestStatus>('idle');
  const [error, setError] = useState<string | null>(null);

  const dispatch = useAppDispatch()
  const isOpen = useAppSelector(selectIsAuthModalOpen)

  const isLogin = mode === 'login'
  const isSignUp = mode === 'signup'

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const name = e.target.name
    const value = e.target.value

    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()

    setError(null)

    const { email, password, confirmPassword } = formValues

    if (mode === 'signup') {
      if (password !== confirmPassword) {
        setError('Passwords do not match!')
        return
      }

      setStatus('loading')

      try {
        await signUp(email, password)
        setStatus('success')
        handleClose()
      } catch (error) {
        setStatus('error')

        if (error instanceof FirebaseError) {
          const message = getAuthErrorMessage(error)
          setError(message)
          return
        }
        setError('Something went wrong')
      }
    }

    if (mode === 'login') {
      setStatus('loading')
      try {
        await login(email, password)
        setStatus('success')
        handleClose()
      } catch (error) {
        setStatus('error')
        if (error instanceof FirebaseError) {
          const message = getAuthErrorMessage(error)
          setError(message)
          return
        }
        setError('Something went wrong')
      }
    }
  }

  const handleClose = (): void => {
    setMode('login')
    setFormValues(initialValues)
    setStatus('idle')
    setError(null)
    dispatch(closeAuthModal())
  }

  const handleGoogleSignIn = async (): Promise<void> => {
    setError(null)
    setStatus('loading')

    try {
      await googleSignIn()
      setStatus('success')
      handleClose()
    } catch (error) {
      setStatus('error')
      if (error instanceof FirebaseError) {
        const message = getAuthErrorMessage(error)
        setError(message)
        return
      }
      setError('Something went wrong!')
    }
  }

  return (
    <Modal
      title={isLogin ? 'Login' : 'Sign Up'}
      isOpen={isOpen}
      onClose={handleClose}
      className={authModal}
    >
      <AuthForm
        setMode={setMode}
        isSignUp={isSignUp}
        formValues={formValues}
        error={error}
        status={status}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleGoogleSignIn={handleGoogleSignIn}
      />
    </Modal>
  );
}

export default AuthModal;