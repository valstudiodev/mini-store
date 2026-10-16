import { useForm } from "react-hook-form";
import { RequestStatus } from "@/shared/types/common";
import { useEffect, useState } from "react";
import { emailRules, messageRules, nameRules } from "../model/validation";
import Message from "@/shared/ui/Message/ui/Message";
import { CommentsFormData } from "@/entities/comment/model/types";
import { createComment } from "@/entities/comment/api/commentService";
import '../styles/create-comment.scss';


function CreateComment(): React.JSX.Element {
  const createCommentForm = 'create-comment-form'

  const [status, setStatus] = useState<RequestStatus>('idle');

  // const dispatch = useAppDispatch()
  // const isErrorSelect = useAppSelector(selectCommentError)
  // const isCreatingComment = useAppSelector(selectCommentIsCreating)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<CommentsFormData>()

  const isLoading = status === 'loading'
  const isError = status === 'error'
  const isSuccess = status === 'success'

  const onSubmit = async (data: CommentsFormData): Promise<void> => {
    setStatus('loading')

    try {
      await createComment(data)
      setStatus('success')
      reset()
    } catch (error) {
      console.error('Create comment error:', error);
      setStatus('error')
    }
  }

  useEffect(() => {
    if (!isSuccess) return

    const timer = setTimeout(() => {
      setStatus('idle')
    }, 3000);

    return () => {
      clearTimeout(timer)
    };
  }, [isSuccess]);


  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={createCommentForm}>
      <div className={`${createCommentForm}__body`}>
        <div className={`${createCommentForm}__textarea`}>
          <textarea
            id="message"
            placeholder="Write your comment here *"
            className={`${createCommentForm}__textarea-input`}
            {...register('text', messageRules)}
          />
          {errors.text && <p className={`${createCommentForm}__error`}>{errors.text.message}</p>}
        </div>

        <div className={`${createCommentForm}__wrap`}>
          <label className={`${createCommentForm}__field`}>
            <input
              id="name"
              type="text"
              placeholder="Write your name here *"
              className={`${createCommentForm}__input`}
              {...register('name', nameRules)}
            />
            {errors.name && <p className={`${createCommentForm}__error`}>{errors.name.message}</p>}
          </label>

          <label className={`${createCommentForm}__field`}>
            <input
              id="email"
              type="email"
              placeholder="Write your email here *"
              className={`${createCommentForm}__input`}
              {...register('email', emailRules)}
            />
            {errors.email && <p className={`${createCommentForm}__error`}>{errors.email.message}</p>}
          </label>
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className={`${createCommentForm}__btn`}
      >
        {isLoading ? 'Sending' : 'post comment'}
      </button>

      {isSuccess && (
        <Message
          label="Your comment has been sent successfully!"
          variant='success'
        />
      )}

      {isError && (
        <Message
          label="Something went wrong. Please try again."
          variant='error'
        />
      )}

    </form>
  );
}

export default CreateComment;