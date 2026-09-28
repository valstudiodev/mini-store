import db from "@/shared/config/firebase/firebase-config";
import { ContactsFormData } from "@/widgets/Contacts/ContactsSection/ContactsForm/model/contacts-form.types";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";


export async function createContact(contactData: ContactsFormData) {
  const contactsCollection = collection(db, 'contacts')

  const docRef = await addDoc(contactsCollection, {
    ...contactData,
    createdAt: serverTimestamp()
  })

  return docRef
}