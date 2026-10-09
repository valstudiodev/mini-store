import { CheckoutFormSectionProps } from "../model/types";

export const checkoutFormSections: CheckoutFormSectionProps[] = [
  {
    title: 'Billing Details',
    fields: [
      {
        name: 'firstName',
        label: 'First name*',
        type: 'text',
        required: true,
        placeholder: '',
      },
      {
        name: 'lastName',
        label: 'Last name*',
        type: 'text',
        required: true,
        placeholder: '',
      },
      {
        name: 'companyName',
        label: 'Company name (optional)',
        type: 'text',
        required: false,
        placeholder: '',
      },
      {
        name: 'countryRegion',
        label: 'Country / Region *',
        type: 'text',
        required: true,
        placeholder: 'United States (US)',
      },
      {
        name: 'address',
        label: 'Street address *',
        type: 'text',
        required: true,
        placeholder: 'House number and street name',
      },
      {
        name: 'apartment',
        label: '',
        type: 'text',
        required: true,
        placeholder: 'Appartments, suite, etc.',
      },
      {
        name: 'city',
        label: 'Town / City *',
        type: 'text',
        required: true,
        placeholder: 'Town / City *',
      },
      {
        name: 'state',
        label: 'State *',
        type: 'text',
        required: true,
        placeholder: 'Florida',
      },
      {
        name: 'zipCode',
        label: 'ZIP Code *',
        type: 'text',
        required: true,
        placeholder: '',
      },
      {
        name: 'phone',
        label: 'Phone *',
        type: 'text',
        required: true,
        placeholder: '',
      },
      {
        name: 'email',
        label: 'Email address *',
        type: 'text',
        required: true,
        placeholder: '',
      },
    ]
  },
  {
    title: 'Additional Information',
    fields: [
      {
        name: 'firstName',
        label: 'Order notes (optional)',
        type: 'text',
        required: false,
        placeholder: 'Notes about your order. Like special notes for delivery.',
      }
    ]
  },
]

// export const checkoutAdditionalInfo: CheckoutFieldConfig =
// {
//   name: 'firstName',
//   label: 'Order notes (optional)',
//   type: 'text',
//   required: false,
//   placeholder: 'Notes about your order. Like special notes for delivery.',
// }
