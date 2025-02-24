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
import CompleteReading from "./components/CompleteReading.jsx";
import WishList from "./components/WishList.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://ridwan4d.github.io/test-json-host/booksData.json"),
      },
      {
        path: "/listed",
        element: <ListedBook></ListedBook>,
        children: [
          {
            index: true,
            element: <CompleteReading></CompleteReading>,
          },
          {
            path: "wishList",
            element: <WishList></WishList>,
          },
        ],
      },
      {
        path: "/forRead",
        element: <PagesRead></PagesRead>,
      },
      {
        path: "/topBooks",
        element: <TopBooks></TopBooks>,
        loader: () =>
          fetch(
            `https://ridwan4d.github.io/top-book-data-of-json/topBook.json`
          ),
      },
      {
        path: "/book/:id",
        element: <BookDetails></BookDetails>,
        loader: () =>
          fetch(`https://ridwan4d.github.io/test-json-host/booksData.json`),
      },
      {
        path: "/writers",
        element: <FamousWriter></FamousWriter>,
        loader: () =>
          fetch(
            `https://ridwan4d.github.io/assignment-8-fake-data-3/fakeData.json`
          ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
