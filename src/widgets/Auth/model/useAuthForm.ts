import { useState } from 'react'
import { FirebaseError } from 'firebase/app'

import { useAppDispatch, useAppSelector } from '@/app/store/hooks'

import { login } from "@/features/auth/login/model/login";
import { signUp } from "@/features/auth/signup/model/signup";
import { googleSignIn } from "@/features/auth/google/model/googleSignIn";

import { closeAuthModal } from '@/features/auth/model/authModalSlice'

import getAuthErrorMessage from '@/widgets/Auth/model/getAuthErrorMessage'

import type {
  AuthFormValues,
  AuthMode,
  RequestStatus
} from '@/widgets/Auth/model/auth-modal.types'
import { FieldErrors, SubmitHandler, useForm, UseFormRegister } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema, signupSchema } from './authValidation';
import { selectAuthInitialized, selectAuthUser } from '@/features/auth/model/authSelector';

const initialValues: AuthFormValues = {
  email: '',
  password: '',
  confirmPassword: ''
}

export interface UseAuthFormReturn {
  mode: AuthMode;
  status: RequestStatus;
  error: string | null;
  isLogin: boolean;
  isSignUp: boolean;

  errors: FieldErrors<AuthFormValues>;
  register: UseFormRegister<AuthFormValues>;

  handleFormSubmit: (
    e: React.FormEvent<HTMLFormElement>
  ) => void;

  handleGoogleSignIn: () => Promise<void>;
  handleClose: () => void;
  handleModeChange: (mode: AuthMode) => void;
}


export function useAuthForm(): UseAuthFormReturn {
  const dispatch = useAppDispatch()

  const [mode, setMode] = useState<AuthMode>('login')

  const [status, setStatus] = useState<RequestStatus>('idle')
  const [error, setError] = useState<string | null>(null)

  const isLogin = mode === 'login'
  const isSignUp = mode === 'signup'

  const user = useAppSelector(selectAuthUser)
  const initialized = useAppSelector(selectAuthInitialized)

  const form = useForm<AuthFormValues>({
    resolver: yupResolver(isSignUp ? signupSchema : loginSchema),
    defaultValues: initialValues,
    mode: 'onTouched',
  })

  const {
    register,
    reset,
    handleSubmit: validateForm,
    formState: { errors },
  } = form

  const handleClose = (): void => {
    setMode('login')
    reset(initialValues)
    setStatus('idle')
    setError(null)

    dispatch(closeAuthModal())
  }

  const handleModeChange = (nextMode: AuthMode): void => {
    setMode(nextMode)
    setError(null)
    setStatus('idle')
    reset(initialValues)
  }

  const submitAuth: SubmitHandler<AuthFormValues> = async (values) => {
    console.log('Auth state:', {
      user,
      initialized,
      isLogin,
      isSignUp,
    });

    if (isLogin && initialized && user) {
      handleClose()
      return
    }

    setError(null)
    setStatus('loading')

    try {
      if (isSignUp) {
        await signUp(values.email, values.password)
      } else {
        await login(values.email, values.password)
      }

      setStatus('success')
      handleClose()

    } catch (error: unknown) {
      setStatus('error')

      setError(
        error instanceof FirebaseError
          ? getAuthErrorMessage(error)
          : 'Something went wrong'
      )
    }
  }

  const handleFormSubmit = (
    event: React.FormEvent<HTMLFormElement>,
  ): void => {
    void validateForm(submitAuth)(event);
  };

  const handleGoogleSignIn = async (): Promise<void> => {
    setError(null)
    setStatus('loading')

    try {
      await googleSignIn()

      setStatus('success')
      handleClose()
    } catch (error) {
      setStatus('error')

      setError(
        error instanceof FirebaseError
          ? getAuthErrorMessage(error)
          : 'Something went wrong.'
      )
    }
  }

  return {
    mode,
    status,
    error,
    errors,
    register,
    isLogin,
    isSignUp,
    handleGoogleSignIn,
    handleClose,
    handleModeChange,
    handleFormSubmit
  }
}