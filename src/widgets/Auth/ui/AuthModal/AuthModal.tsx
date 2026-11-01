import { Modal } from "@/shared/ui";
import './auth-modal.scss';
import AuthForm from "../AuthForm/AuthForm";
import { useAuthForm } from "../../model/useAuthForm";
import { useAppSelector } from "@/app/store/hooks";
import { selectIsAuthModalOpen } from "@/features/auth/model/authSelector";


function AuthModal() {
  const authModal = 'auth-modal'

  const isOpen = useAppSelector(selectIsAuthModalOpen)

  const {
    isLogin,
    isSignUp,
    status,
    error,
    errors,
    register,
    handleGoogleSignIn,
    handleClose,
    handleModeChange,
    handleFormSubmit,
  } = useAuthForm()

  return (
    <Modal
      title={isLogin ? 'Login' : 'Sign Up'}
      isOpen={isOpen}
      onClose={handleClose}
      className={authModal}
    >
      <AuthForm
        isSignUp={isSignUp}
        register={register}
        errors={errors}
        error={error}
        status={status}
        handleModeChange={handleModeChange}
        handleSubmit={handleFormSubmit}
        handleGoogleSignIn={handleGoogleSignIn}
      />
    </Modal>
  );
}

export default AuthModal;