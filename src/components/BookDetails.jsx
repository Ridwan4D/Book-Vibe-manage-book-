import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveDataLocalStorage } from "../utilities/localStorage";

const BookDetails = () => {
  const [btnValue, setBtnValue] =  useState(true);
  const books = useLoaderData();
  const { id } = useParams();
  const book = books.find((book) => book.id == id);
  const {
    image,
    bookName,
    tags,
    author,
    category,
    rating,
    review,
    totalPages,
    yearOfPublishing,
    publisher,
  } = book;
  const handleReadBtn = (e) => {
    const savedData = JSON.parse(localStorage.getItem("books")) || [];
    const isExist = savedData.find((item) => item.id == book.id);
    if (!isExist && btnValue) {
      const localData = [...savedData, book];
      localStorage.setItem("books", JSON.stringify(localData));
      toast("Reading complete");
    } else if (isExist && btnValue) {
      toast("Reading complete");
    } else if (isExist && !btnValue) {
      toast("Already completed");
    }
    setBtnValue(e)
  };
  const handleWishListBtn = () => {
    saveDataLocalStorage(book)
  };
  return (
    <div>
      <div className="dark:bg-gray-100 dark:text-gray-900">
        <div className="container grid grid-cols-12 mx-auto">
          <div className="flex flex-col justify-center col-span-12 bg-[#1313130D] rounded-2xl align-middle bg-no-repeat bg-cover lg:col-span-6 lg:h-auto">
            <img src={image} alt="" />
          </div>
          <div className="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 dark:divide-gray-300">
            <div className="pt-6 pb-4 space-y-2">
              <h1 className="text-3xl font-bold">{bookName}</h1>
              <p>By: {author}</p>
              <hr />
              <p>{category}</p>
            </div>
            <div className="pt-6 pb-4 space-y-2">
              <p className="text-[#131313B3]">
                <span className="font-bold text-[#131313]">Review:</span>{" "}
                {review}
              </p>
              <div className="flex py-3 dark:border-gray-600 space-x-7">
                <span className="font-bold text-[#131313]">Tag</span>{" "}
                {tags.map((tag, idx) => (
                  <a
                    key={idx}
                    rel="noopener noreferrer"
                    className="px-2 bg-[#23BE0A0D] green-text rounded-full"
                  >
                    #{tag}
                  </a>
                ))}
              </div>
            </div>
            <div className="pt-6 pb-4 space-y-2">
              <div className="flex gap-10">
                <div className="text-[#131313B3]">
                  <p>Number of Pages:</p>
                  <p>Publisher:</p>
                  <p>Year of Publishing:</p>
                  <p>Rating:</p>
                </div>
                <div className="text-[#131313] font-semibold">
                  <p>{totalPages}</p>
                  <p>{publisher}</p>
                  <p>{yearOfPublishing}</p>
                  <p>{rating}</p>
                </div>
              </div>
              <div className="space-x-5">
                <button
                  onClick={() => handleReadBtn(false)}
                  id="read-btn"
                  type="button"
                  className="px-2 py-1 md:px-5 md:py-2 text-sm md:text-lg font-semibold rounded-lg text-black border-2 border-gray-300"
                >
                  Read
                </button>
                <button
                  onClick={handleWishListBtn}
                  type="button"
                  className="px-2 py-1 md:px-5 md:py-2 text-sm md:text-lg font-semibold rounded-lg bg-[#59C6D2] text-white"
                >
                  Wishlist
                </button>
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
