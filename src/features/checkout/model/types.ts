export interface CheckoutFormData {
  firstName: string;
  lastName: string;
  companyName?: string;
  countryRegion: string;
  address: string;
  apartment?: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  email: string;
}

export interface CheckoutFieldConfig {
  name: keyof CheckoutFormData;
  label: string;
  type: string;
  required?: boolean;
  placeholder?: string;
}

export interface CheckoutFormSectionProps {
  title: string;
  fields: CheckoutFieldConfig[]
}

export type CheckoutFormErrors = Partial<
  Record<keyof CheckoutFormData, string>
>;