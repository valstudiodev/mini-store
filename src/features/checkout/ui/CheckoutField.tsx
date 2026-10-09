import { FieldError, UseFormRegister } from 'react-hook-form';
import { CheckoutFieldConfig, CheckoutFormData } from '../model/types';
import '../styles/checkout-filed.scss';

interface CheckoutFieldProps {
  className?: string;
  fieldData: CheckoutFieldConfig;
  register: UseFormRegister<CheckoutFormData>;
  error?: FieldError;
}

function CheckoutField({
  className = '',
  fieldData,
  register,
  error
}: CheckoutFieldProps): React.JSX.Element {
  const checkoutField = 'checkout-field'

  return (
    <div className={`${checkoutField} ${className}`}>
      <label
        className={`${checkoutField}__label`}
        htmlFor={fieldData.name}>
        {fieldData.label}
      </label>
      <input
        id={fieldData.name}
        className={`${checkoutField}__input`}
        type={fieldData.type}
        placeholder={fieldData.placeholder}
        {...register(fieldData.name)}
      />

      {error && <span>{error.message}</span>}
    </div>
  );
}

export default CheckoutField;