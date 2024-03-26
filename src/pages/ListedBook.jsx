import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
const ListedBook = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div>
      <div className="text-3xl font-bold bg-[#1313130D] text-center py-8 rounded-2xl mb-10">
        Books
      </div>
      <div className="text-center">
        <div className="dropdown dropdown-bottom bg-[#23BE0A] rounded-lg">
          <div
            tabIndex={0}
            role="button"
            className="btn mx-1 border-0 bg-[#23BE0A] hover:bg-[#23BE0A] text-white text-lg font-semibold rounded-lg"
          >
            Sort By
            <FaChevronDown></FaChevronDown>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Rating</a>
            </li>
            <li>
              <a>Number of pages</a>
            </li>
            <li>
              <a>Published year</a>
            </li>
          </ul>
        </div>
      </div>
      {/* Tabs here */}
      <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start mt-16 flex-nowrap dark:bg-gray-100 dark:text-gray-800">
        <Link
          to=""
          onClick={() => setTabIndex(0)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 0 ? "border border-b-0" : "border-b"
          } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
        >
          <span>Read Books</span>
        </Link>
        <Link
          to="wishList"
          onClick={() => setTabIndex(1)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 1 ? "border border-b-0" : "border-b"
          } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
        >
          <span>Wish List</span>
        </Link>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default ListedBook;
