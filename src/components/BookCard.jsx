import PropTypes from "prop-types"; // ES6
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  const { id, image, bookName, tags, author, category, rating } = book;
  // console.log(book);
  return (
    <Link
      to={`/book/${id}`}
      className="p-6 rounded-md shadow-md border-2 border-gray-300 hover:scale-105 transition"
    >
      <div className="bg-gray-200 py-10 rounded-xl">
        <img src={image} alt="" className="mx-auto rounded-md h-72" />
      </div>
      <div className="flex flex-col md:flex-row py-3 dark:border-gray-600 md:space-x-10">
        {tags.map((tag,idx) => (
          <a
            key={idx}
            rel="noopener noreferrer"
            className="px-2 bg-[#23BE0A0D] green-text rounded-full my-1"
          >
            {tag}
          </a>
        ))}
      </div>
      <div className="mt-1 mb-3">
        <h2 className="text-2xl font-bold">{bookName}</h2>
      </div>
      <p className="font-medium border-b-2 border-dashed pb-5">By: {author}</p>
      <div className="flex justify-between mt-4">
        <p>{category}</p>
        <div className="flex justify-center items-center gap-1">
          <FaRegStar></FaRegStar>
          <p>{rating}</p>
        </div>
      </div>
    </Link>
  );
};
BookCard.propTypes = {
  book: PropTypes.object,
};
export default BookCard;
