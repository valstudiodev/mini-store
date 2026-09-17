import { useEffect, useState } from "react";
import { StatusRequest } from "./subscribe-types";
import { validateEmail } from "./subscribe-validation";
import { addSubscriber } from "../api/subscribe-firebase";


function useSubscribe() {
  const [email, setEmail] = useState<string>('');
  const [status, setStatus] = useState<StatusRequest>('idle');
  const [error, setError] = useState<string | null>(null);

  const handleEmailChange = (newEmail: string): void => {
    setEmail(newEmail)
    setError(null)
    setStatus('idle')
  }

  const handleSubmit = async (): Promise<void> => {
    const validationError = validateEmail(email)

    if (validationError) {
      setError(validationError)
      setStatus('error')
      return
    }

    setStatus('loading')
    setError(null)

    // api
    try {
      await addSubscriber(email)
      setStatus('success')
    } catch (error) {
      if (error instanceof Error) {
        setStatus('error')
        setError(error.message)
      }
    }
  }

  useEffect(() => {
    if (status !== 'success') {
      return
    }

    const timer = setTimeout(() => {
      setEmail('')
    }, 2000);
    return () => {
      clearTimeout(timer)
    }
  }, [status]);


  return {
    handleEmailChange,
    handleSubmit,
    email,
    status,
    error
  }
}

export default useSubscribe;