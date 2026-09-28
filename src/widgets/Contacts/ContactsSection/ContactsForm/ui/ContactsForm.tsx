import { useEffect, useState } from "react";
import ContactHeader from "../../ContactsHeader/ui/ContactHeader";
import { ContactsFormData, RequestStatusType } from "../model/contacts-form.types"
import { getFormValue } from "../model/getFormValue"
import '../styles/contacts-form.scss';
import Message from "@/shared/ui/Message/ui/Message";
import { createContact } from "@/entities/contact/api/contactServise";

function ContactsForm({
  className = ''
}: { className?: string }): React.JSX.Element {
  const contactsForm = 'contacts-form'

  const [status, setStatus] = useState<RequestStatusType>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()

    setStatus('loading')

    const form = e.currentTarget

    const formData = new FormData(form)

    const data: ContactsFormData = {
      name: getFormValue(formData, 'name'),
      email: getFormValue(formData, 'email'),
      phone: getFormValue(formData, 'phone'),
      subject: getFormValue(formData, 'subject'),
      message: getFormValue(formData, 'message'),
    }

    try {
      await createContact(data)
      setStatus('success')
      form.reset()
    } catch (error) {
      setStatus('error')
    }

    console.log(data);

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
        onSubmit={handleSubmit}
      >
        <div className={`${contactsForm}__wrap`}>
          <label className={`${contactsForm}__field`}>
            <input
              name="name"
              className={`${contactsForm}__input`}
              type="text"
              placeholder="Your full name *"
              required
              minLength={2}
            />
          </label>

          <label className={`${contactsForm}__field`}>
            <input
              name="email"
              className={`${contactsForm}__input`}
              type="email"
              placeholder="Write your email here *"
              required
            />
          </label>
        </div>

        <label className={`${contactsForm}__field`}>
          <input
            name="phone"
            className={`${contactsForm}__input`}
            type="tel"
            placeholder="Phone number"
            required
            pattern="^\+?[0-9\s()-]{10,20}$"
          />
        </label>

        <label className={`${contactsForm}__field`}>
          <input
            name="subject"
            className={`${contactsForm}__input`}
            type="text"
            placeholder="Write your subject here"
            required
            minLength={10}
          />
        </label>

        <textarea
          name="message"
          className={`${contactsForm}__textarea`}
          placeholder="Write your message here *"
          required
          minLength={15}
        />

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