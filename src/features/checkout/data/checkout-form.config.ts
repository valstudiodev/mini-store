import { CheckoutFormSectionProps } from "../model/types";

export const checkoutFormSections: CheckoutFormSectionProps[] = [
  {
    title: 'checkout.billingDetails',
    fields: [
      {
        name: 'firstName',
        label: 'checkout.fields.firstName',
        type: 'text',
        required: true,
        placeholder: '',
      },
      {
        name: 'lastName',
        label: 'checkout.fields.lastName',
        type: 'text',
        required: true,
        placeholder: '',
      },
      {
        name: 'companyName',
        label: 'checkout.fields.companyName',
        type: 'text',
        required: false,
        placeholder: '',
      },
      {
        name: 'countryRegion',
        label: 'checkout.fields.countryRegion',
        type: 'text',
        required: true,
        placeholder: 'checkout.placeholders.countryRegion',
      },
      {
        name: 'address',
        label: 'checkout.fields.address',
        type: 'text',
        required: true,
        placeholder: 'checkout.placeholders.address',
      },
      {
        name: 'apartment',
        label: 'checkout.fields.apartment',
        type: 'text',
        required: true,
        placeholder: 'checkout.placeholders.apartment',
      },
      {
        name: 'city',
        label: 'checkout.fields.city',
        type: 'text',
        required: true,
        placeholder: 'checkout.placeholders.city',
      },
      {
        name: 'state',
        label: 'checkout.fields.state',
        type: 'text',
        required: true,
        placeholder: 'checkout.placeholders.state',
      },
      {
        name: 'zipCode',
        label: 'checkout.fields.zipCode',
        type: 'text',
        required: true,
        placeholder: '',
      },
      {
        name: 'phone',
        label: 'checkout.fields.phone',
        type: 'text',
        required: true,
        placeholder: '',
      },
      {
        name: 'email',
        label: 'checkout.fields.email',
        type: 'text',
        required: true,
        placeholder: '',
      },
    ]
  },
  {
    title: 'checkout.additionalInformation',
    fields: [
      {
        name: 'notes',
        label: 'checkout.fields.notes',
        type: 'text',
        required: false,
        placeholder: 'checkout.placeholders.notes',
      }
    ]
  },
]

