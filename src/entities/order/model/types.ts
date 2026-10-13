import { Timestamp } from "firebase/firestore";


export interface OrderFormData {
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
  notes?: string;
}

export interface Order extends OrderFormData {
  id: string,
  createdAt: Timestamp;
}