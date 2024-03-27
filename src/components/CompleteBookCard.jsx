import PropTypes from "prop-types"; // ES6
import { FaCalendarDays } from "react-icons/fa6";
import { TiGroupOutline } from "react-icons/ti";
import { MdOutlineInsertPageBreak } from "react-icons/md";
import { Link } from "react-router-dom";
const CompleteBookCard = ({ data }) => {
  // console.log(data);
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
        <div className="container flex flex-col mx-auto space-y-5 lg:space-y-0 lg:flex-row md:h-auto">
          <div className="w-full lg:w-1/3 bg-[#1313130D] rounded-2xl">
            <img src={image} className="w-1/2 mx-auto py-10 h-full" alt="" />
          </div>
          <div className="flex flex-col w-full md:px-6 lg:w-2/3 lg:px-12">
            <h2 className="text-3xl font-semibold leading-none">{bookName}</h2>
            <p className="mt-2 mb-0 md:mb-8 font-medium">By: {author}</p>
            <div className="flex flex-col md:flex-row md:items-center gap-x-20">
              <div className="flex flex-col md:flex-row py-3 md:py-0 space-x-7">
                <span className="font-bold text-[#131313]">Tag</span>{" "}
                {tags.map((tag, idx) => (
                  <a
                    key={idx}
                    rel="noopener noreferrer"
                    className="px-2 bg-[#23BE0A0D] green-text rounded-full my-1"
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
            <div className="mt-6 md:flex items-center space-y-5 md:space-y-0 gap-16 mb-10">
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
            <div className="mt-5 md:flex gap-5 space-y-3 md:space-y-0 text-sm md:text-lg font-semibold">
              <p className=" py-2 md:py-1 px-3 md:px-7  rounded-full bg-[#328EFF26] text-[#328EFF]">
                Category: {category}
              </p>
              <p className=" py-2 md:py-1  px-3 md:px-7 rounded-full bg-[#FFAC3326] text-[#FFAC33] ">
                Rating: {rating}
              </p>
              <Link
                to={`/book/${id}`}
                type="button"
                className="px-5 md:px-7 py-2 md:py-1 rounded-full bg-[#23BE0A] text-white"
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
CompleteBookCard.propTypes = {
  data: PropTypes.object,
};
export default CompleteBookCard;
