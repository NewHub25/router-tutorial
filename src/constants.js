import { createContact, getContacts } from "./contact";

export async function loader() {
  const contacts = await getContacts();
  return { contacts };
}

export async function contactLoader({ params }) {
  const contact = await getContacts(params.contactId);
  return { contact };
}

export async function action() {
  const contact = await createContact();
  return { contact };
}
