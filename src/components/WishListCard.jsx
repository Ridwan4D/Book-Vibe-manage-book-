import PropTypes from "prop-types"; // ES6
import { FaCalendarDays } from "react-icons/fa6";
import { TiGroupOutline } from "react-icons/ti";
import { MdOutlineInsertPageBreak } from "react-icons/md";
import { Link } from "react-router-dom";

const WishListCard = ({ data }) => {
  const {
    id,
    image,
    bookName,
    author,
    category,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = data;
  return (
    <div>
      <section className="mt-7 border-2 rounded-2xl p-6">
        <div className="container flex flex-col mx-auto lg:flex-row h-[40vh]">
          <div className="w-full lg:w-1/3 bg-[#1313130D] rounded-2xl">
            <img src={image} className="w-1/2 mx-auto py-10 h-full" alt="" />
          </div>
          <div className="flex flex-col w-full px-6 lg:w-2/3 md:px-8 lg:px-12">
            <h2 className="text-3xl font-semibold leading-none">{bookName}</h2>
            <p className="mt-2 mb-8 font-medium">By: {author}</p>
            <div className="flex items-center gap-20">
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
              <div className="flex items-center gap-2">
                <FaCalendarDays></FaCalendarDays>
                <p className="text-[#131313CC]">
                  Year of Publishing: {yearOfPublishing}
                </p>
              </div>
            </div>
            <div className="mt-6 flex gap-16 mb-10">
              <div className="flex items-center gap-2">
                <TiGroupOutline></TiGroupOutline>
                <p className="text-[#131313CC]">Publisher: {publisher}</p>
              </div>
              <div className="flex items-center gap-2">
                <MdOutlineInsertPageBreak></MdOutlineInsertPageBreak>
                <p className="text-[#131313CC]">Page: {totalPages}</p>
              </div>
            </div>
            <hr />
            <div className="mt-5 flex gap-5">
              <p className="text-[#328EFF] px-7 md:px-5 text-sm md:text-lg font-semibold rounded-full bg-[#328EFF26]">
                Category: {category}
              </p>
              <p className="text-[#FFAC33] px-7 md:px-5 text-sm md:text-lg font-semibold rounded-full bg-[#FFAC3326]">
                Rating: {rating}
              </p>
              <Link
                to={`/book/${id}`}
                type="button"
                className="px-7 md:px-5 text-sm md:text-lg font-semibold rounded-full bg-[#23BE0A] text-white"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
WishListCard.propTypes = {
  data: PropTypes.object,
};
export default WishListCard;
