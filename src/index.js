import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  HomePage,
  AboutPage,
  WorkPage,
  ContactPage,
  ErrorPage,
} from "./pages/index.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/work",
    element: <WorkPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },

  {
    path: "/contact",
    element: <ContactPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
