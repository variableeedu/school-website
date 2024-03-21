import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home.tsx";
import "./index.css";
import "./About-us.tsx";
import Aboutus from "./About-us.tsx";
import Management from "./management.tsx";
import Newsevent from "./newsevent.tsx";
import Gallery from "./gallery.tsx";
import Contact from "./contact.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/home",
    element: <Home></Home>,
  },
  {
    path: "/about",
    element: <Aboutus></Aboutus>,
  },
  {
    path: "/management",
    element: <Management></Management>,
  },
  {
    path: "/newsevent",
    element: <Newsevent></Newsevent>,
  },
  {
    path: "/gallery",
    element: <Gallery></Gallery>,
  },
  {
    path: "/contact",
    element: <Contact></Contact>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
