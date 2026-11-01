import { FirebaseError } from "firebase/app";


function getAuthErrorMessage(error: FirebaseError): string {
  switch (error.code) {
    case 'auth/invalid-credential':
      return 'Invalid email or password.'
    case 'auth/popup-closed-by-user':
      return 'Google sign-in was cancelled.'
    case 'auth/email-already-in-use':
      return 'This email is already in use.'
    case 'auth/invalid-email':
      return 'Invalid email address.'
    case 'auth/weak-password':
      return 'Password is too weak.'
    default:
      return 'Something went wrong.'
  }
}

export default getAuthErrorMessage;


