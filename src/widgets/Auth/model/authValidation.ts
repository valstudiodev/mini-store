import * as yup from 'yup'

export type LoginFormValues = yup.InferType<typeof loginSchema>

export type SignupFormValues = yup.InferType<typeof signupSchema>

export const loginSchema = yup.object({
  email: yup
    .string()
    .trim()
    .email('Invalid email address.')
    .required('Email is required.'),

  password: yup
    .string()
    .required('Password is required.'),

  confirmPassword: yup
    .string()
    .defined(),
})

export const signupSchema = yup.object({
  email: yup
    .string()
    .trim()
    .email('Invalid email address.')
    .required('Email is required.'),

  password: yup
    .string()
    .required('Password is required.')
    .min(8, 'Password must contain at least 8 characters')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter.')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter.')
    .matches(/[0-9]/, 'Password must contain at least one number.')
    .matches(
      /[^A-Za-z0-9\s]/,
      'Password must contain at least one special character.',
    ),

  confirmPassword: yup
    .string()
    .required('Please confirm your password.')
    .oneOf([yup.ref('password')], 'Passwords do not match.')
})