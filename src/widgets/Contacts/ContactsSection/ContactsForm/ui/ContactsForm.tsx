import { useEffect, useState } from "react";
import ContactHeader from "../../ContactsHeader/ui/ContactHeader";
import { ContactsFormData, RequestStatusType } from "../model/contacts-form.types"
// import { getFormValue } from "../model/getFormValue"
import '../styles/contacts-form.scss';
import Message from "@/shared/ui/Message/ui/Message";
import { createContact } from "@/entities/contact/api/contactServise";
import { useForm } from "react-hook-form";
import { emailRules, messageRules, nameRules, phoneRules } from "@/entities/contact/model/validation";

function ContactsForm({
  className = ''
}: { className?: string }): React.JSX.Element {
  const contactsForm = 'contacts-form'

  const [status, setStatus] = useState<RequestStatusType>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactsFormData>()
  console.log(errors)

  const onSubmit = async (data: ContactsFormData): Promise<void> => {

    setStatus('loading')

    try {
      await createContact(data)
      setStatus('success')
      reset()
    } catch (error) {
      setStatus('error')
    }
  }

  useEffect(() => {
    if (status !== 'success') return

    const timer = setTimeout(() => {
      setStatus('idle')
    }, 2000);
    return () => {
      clearTimeout(timer)
    }
  }, [status]);


  return (
    <div className={`${contactsForm} ${className}`}>
      <ContactHeader
        title="any questions?"
        text="Use the form below to get in touch with us."
        className={`${contactsForm}__header`}
      />
      <form
        className={`${contactsForm}__form`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={`${contactsForm}__wrap`}>
          <label className={`${contactsForm}__field`}>
            <input
              placeholder="Your full name *"
              type="text"
              id="name"
              {...register('name', nameRules)}
            />
            {errors.name && <p className='text-red-700'>{errors.name.message}</p>}
          </label>

          <label className={`${contactsForm}__field`}>
            <input
              className={`${contactsForm}__input`}
              type="email"
              placeholder="Write your email here *"
              id="email"
              {...register('email', emailRules)}
            />
            {errors.email && <p className='text-red-700'>{errors.email.message}</p>}
          </label>
        </div>

        <label className={`${contactsForm}__field`}>
          <input
            className={`${contactsForm}__input`}
            type="tel"
            placeholder="Phone number"
            {...register('phone', phoneRules)}
          />
          {errors.phone && <p className='text-red-700'>{errors.phone.message}</p>}
        </label>

        <label className={`${contactsForm}__field`}>
          <input
            className={`${contactsForm}__input`}
            type="text"
            placeholder="Write your subject here"
            minLength={10}
            {...register('subject', {
              required: 'The subject text is nesessary!',
              minLength: {
                value: 10,
                message: 'The subject text is too short!'
              }
            })}
          />
          {errors.subject && <p className='text-red-700'>{errors.subject.message}</p>}
        </label>

        <div>
          <textarea
            className={`${contactsForm}__textarea`}
            placeholder="Write your message here *"
            {...register('message', messageRules)}
          />
          {errors.message && <p className='text-red-700'>{errors.message.message}</p>}
        </div>


        <button
          type="submit"
          disabled={status === 'loading'}
          className={`${contactsForm}__btn-submit`}
        >
          {status === 'loading' ? 'Sending...' : 'Submit'}
        </button>

        {status === 'success' && (
          <Message
            label="Your message has been sent successfully!"
            variant='success'
          />
        )}

        {status === 'error' && (
          <Message
            label="Something went wrong. Please try again."
            variant='error'
          />
        )}

      </form>
    </div>

  );
}

export default ContactsForm;