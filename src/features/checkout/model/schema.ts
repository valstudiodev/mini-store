import * as yup from "yup";

export const checkoutSchema = yup.object({
  firstName: yup
    .string().trim()
    .required('The first name is required ')
    .max(30, 'First name must be 30 characters or less'),
  lastName: yup
    .string().trim()
    .required('The last name is required ')
    .matches(/^[A-Za-z]+$/i, 'Only letters'),
  companyName: yup
    .string().trim()
    .optional(),

  countryRegion: yup
    .string().trim()
    .required('The country is required'),

  address: yup
    .string().trim()
    .required('The address is required'),

  apartment: yup
    .string().trim()
    .optional(),

  city: yup
    .string().trim()
    .required('The city is required'),

  state: yup
    .string().trim()
    .required('The state is required'),

  zipCode: yup
    .string().trim()
    .required('The ZIP code is required'),

  phone: yup
    .string().trim()
    .required('The phone is required'),

  email: yup
    .string().trim()
    .email('Invalid email address')
    .required('The email is required'),
}) 