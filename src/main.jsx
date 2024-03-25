import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import Error from "./pages/Error.jsx";
import ListedBook from "./pages/ListedBook.jsx";
import PagesReaded from "./pages/PagesReaded.jsx";
import TopBooks from "./pages/TopBooks.jsx";
import FamousWriter from "./pages/FamousWriter.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/listed",
        element:<ListedBook></ListedBook>
      },
      {
        path:"/forRead",
        element:<PagesReaded></PagesReaded>
      },
      {
        path:"/topBooks",
        element:<TopBooks></TopBooks>
      },
      {
        path:"/writers",
        element:<FamousWriter></FamousWriter>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
