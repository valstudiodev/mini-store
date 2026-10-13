import { RegisterOptions } from "react-hook-form";
import { CommentsFormData } from "@/entities/comment/model/types";


export const messageRules: RegisterOptions<CommentsFormData, 'text'> = {
  required: 'The message is necessary!',
  minLength: {
    value: 10,
    message: 'The length of the message must be longer.'
  }
}

export const emailRules: RegisterOptions<CommentsFormData, 'email'> = {
  required: 'The email is necessary!',
  validate: (value) => value.includes(`@`) || 'Email must contain @'
}

export const nameRules: RegisterOptions<CommentsFormData, 'name'> = {
  required: 'The use name is necessary!',
  minLength: {
    value: 3,
    message: 'The length of the name must be longer'
  }
}