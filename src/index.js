import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import WorkPage from "./pages/Work/index";
import AboutPage from "./pages/About/index";
import ContactPage from "./pages/Contact/index";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ErrorPage from "./pages/Error";

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
