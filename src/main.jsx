import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import Error from "./pages/Error.jsx";
import ListedBook from "./pages/ListedBook.jsx";
import PagesRead from "./pages/PagesRead.jsx";
import TopBooks from "./pages/TopBooks.jsx";
import FamousWriter from "./pages/FamousWriter.jsx";
import BookDetails from "./components/BookDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader: ()=> fetch("https://ridwan4d.github.io/test-json-host/booksData.json")
      },
      {
        path:"/listed",
        element:<ListedBook></ListedBook>
      },
      {
        path:"/forRead",
        element:<PagesRead></PagesRead>
      },
      {
        path:"/topBooks",
        element:<TopBooks></TopBooks>
      },
      {
        path:"/book/:id",
        element: <BookDetails></BookDetails>,
        loader: ()=>fetch(`https://ridwan4d.github.io/test-json-host/booksData.json`)
      },
      {
        path:"/writers",
        element:<FamousWriter></FamousWriter>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
