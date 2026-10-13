export interface ContactsDetails {
  address: string,
  phone1: string,
  phone2: string,
  email: string,
}

export interface ContactsDataProps {
  title: string;
  id: string;
  contacts: ContactsDetails;
}

export const contactsData: ContactsDataProps[] = [
  {
    title: 'Office',
    id: crypto.randomUUID(),
    contacts: {
      address: '730 Glenstone Ave 65802, Springfield, US',
      phone1: '+123 222 333 44',
      phone2: '+123 666 777 88',
      email: 'ministore@yourinfo.com',
    }
  },
  {
    title: 'Management',
    id: crypto.randomUUID(),
    contacts: {
      address: '730 Glenstone Ave 65802, Springfield, US',
      phone1: '+123 222 333 44',
      phone2: '+123 666 777 88',
      email: 'ministore@yourinfo.com',
    }
  }
]