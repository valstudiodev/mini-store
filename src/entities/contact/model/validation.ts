import { ContactsFormData } from "@/widgets/Contacts/ContactsSection/ContactsForm/model/contacts-form.types";
import { RegisterOptions } from "react-hook-form";

export const nameRules: RegisterOptions<ContactsFormData, 'name'> = {
  required: 'The user name is necessary!',
  minLength: {
    value: 3,
    message: 'The length of the name must be longer'
  }
}

export const emailRules: RegisterOptions<ContactsFormData, 'email'> = {
  required: 'The email is necessary!',
  validate: (value) => value.includes('@') || 'Email must contain @'
}

export const phoneRules: RegisterOptions<ContactsFormData, 'phone'> = {
  required: 'The phone number is necessary!',
  pattern: {
    value: /^\+?[0-9\s()-]{8,20}$/,
    message: 'Invalid phone number format!'
  }
}

export const subjectRules: RegisterOptions<ContactsFormData, 'subject'> = {
  required: 'The subject is necessary!',
  minLength: {
    value: 10,
    message: 'The subject text is too short!'
  }
}

export const messageRules: RegisterOptions<ContactsFormData, 'message'> = {
  required: 'The message is necessary!',
  minLength: {
    value: 15,
    message: 'The text is too short!'
  }
}