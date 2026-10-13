import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { OrderFormData } from "../model/types";
import db from "@/shared/config/firebase/firebase-config";


async function createOrder(data: OrderFormData) {
  const orderCollections = collection(db, 'orders')

  const orderDocRef = await addDoc(orderCollections, {
    firstName: data.firstName,
    lastName: data.lastName,
    companyName: data.companyName,
    countryRegion: data.countryRegion,
    address: data.address,
    apartment: data.apartment,
    city: data.city,
    state: data.state,
    zipCode: data.zipCode,
    phone: data.phone,
    email: data.email,
    notes: data.notes,
    createdAt: serverTimestamp()
  })

  return orderDocRef.id
}

export default createOrder