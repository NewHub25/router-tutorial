import { redirect } from "react-router-dom";
import {
  createContact,
  getContacts,
  updateContact,
  getContact,
} from "./contact";

export async function loader() {
  const contacts = await getContacts();
  return { contacts };
}

export async function contactLoader({ params }) {
  const contact = await getContact(params.contactId);
  return { contact };
}

export async function createAction() {
  const contact = await createContact();
  return redirect(`contacts/${contact.id}/edit`);
}

export async function editAction({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await updateContact(params.contactId, updates);
  return redirect(`/contacts/${params.contactId}`);
}
