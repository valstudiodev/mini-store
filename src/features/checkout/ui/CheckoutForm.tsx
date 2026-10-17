import { useForm } from 'react-hook-form';
import { checkoutFormSections } from '../data/checkout-form.config';
import '../styles/checkout-form.scss';
import CheckoutField from './CheckoutField';
import { yupResolver } from '@hookform/resolvers/yup'
import { checkoutSchema } from '../model/schema';
import { CheckoutFormData } from '../model/types';
import ButtonSubmit from './ButtonSubmit';
import createOrder from '@/entities/order/api/orderApi';
import { useEffect, useState } from 'react';
import MessageSuccessOrder from '@/shared/ui/MessageSuccesOrder/ui/MessageSuccessOrder';
import { useTranslation } from 'react-i18next';

interface CheckoutFprmProps {
  className?: string;
}

function CheckoutForm({
  className = ''
}: CheckoutFprmProps): React.JSX.Element {
  const checkoutForm = 'checkout-form'

  const { t } = useTranslation()

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [confirmedOrderId, setConfirmedOrderId] = useState<string | null>(null);
  const isSuccess = confirmedOrderId !== null;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<CheckoutFormData>({
    resolver: yupResolver(checkoutSchema)
  })

  useEffect(() => {
    if (!isSuccess) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isSuccess]);

  const onSubmit = async (data: CheckoutFormData): Promise<void> => {
    setIsLoading(true)

    try {
      const orderId = await createOrder(data)

      setConfirmedOrderId(orderId)
      reset()

    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`${checkoutForm} ${className}`}>
        <div className={`${checkoutForm}__body`}>
          {checkoutFormSections.map((section) => (
            <section className={`${checkoutForm}__section`}>
              <h2 className={`${checkoutForm}__title`}>
                {t(section.title)}
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
        </div>
        <ButtonSubmit
          className={`${checkoutForm}__btn`}
          disabled={isLoading || isSuccess}
        >
          {t('common.placeOrder')}
        </ButtonSubmit>
      </form>

      {confirmedOrderId && (
        <MessageSuccessOrder />
      )}
    </>

  );
}

export default CheckoutForm;