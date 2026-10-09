import { useForm } from 'react-hook-form';
import { checkoutFormSections } from '../data/checkout-form.config';
import '../styles/checkout-form.scss';
import CheckoutField from './CheckoutField';
import { yupResolver } from '@hookform/resolvers/yup'
import { checkoutSchema } from '../model/schema';
import { CheckoutFormData } from '../model/types';
import ButtonSubmit from './ButtonSubmit';

interface CheckoutFprmProps {
  className?: string;
}

function CheckoutForm({
  className = ''
}: CheckoutFprmProps): React.JSX.Element {
  const checkoutForm = 'checkout-form'

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<CheckoutFormData>({
    resolver: yupResolver(checkoutSchema)
  })

  const onSubmit = (data: CheckoutFormData): void => {
    console.log(data);

  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${checkoutForm} ${className}`}>
      {checkoutFormSections.map((section) => (
        <section className={`${checkoutForm}__section`}>
          <h2 className={`${checkoutForm}__title`}>
            {section.title}
          </h2>
          <div className={`${checkoutForm}__wrap`}>
            {section.fields.map((field) => (
              <CheckoutField
                key={field.name}
                fieldData={field}
                register={register}
                error={errors[field.name]}
              />
            ))}
          </div>
        </section>
      ))}
      <ButtonSubmit>
        Submit
      </ButtonSubmit>
    </form>
  );
}

export default CheckoutForm;