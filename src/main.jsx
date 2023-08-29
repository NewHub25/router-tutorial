import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./error-page";
import Root from "./routes/root";
import Contact from "./routes/contact";
import {
  loader as rootLoader,
  createAction,
  contactLoader,
  editAction,
  contactAction,
} from "./constants";
import EditContact from "./routes/edit";
import { destroAction } from "./routes/destroy";
import Index from "./routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: createAction,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
        action: contactAction,
        errorElement: <div>Oops! There was an error in contact route.</div>,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editAction,
        errorElement: <div>Oops! There was an error in editing a record.</div>,
      },
      {
        path: "contacts/:contactId/destroy",
        action: destroAction,
        errorElement: <div>Oops! There was an error in delete a record.</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
  // <React.StrictMode>
  // </React.StrictMode>
);
