import { redirect } from "react-router-dom";
import { deleteContact } from "../contact";

export async function destroAction({ params }) {
//   throw new Error("Upsi");
  await deleteContact(params.contactId);
  return redirect("/");
}
