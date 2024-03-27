import PropTypes from "prop-types"; // ES6

const TopBooksCard = ({ topBook }) => {
  console.log(topBook);
  const {
    image,
    bookName,
    author,
    category,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = topBook;
  return (
    <div className="border-2 border-gray-600 py-3 px-6 rounded-xl">
      <div className="bg-gray-300 py-10 rounded-2xl">
        <img alt="" className="object-contain w-full h-52" src={image} />
      </div>
      <div className="flex flex-col flex-1 pt-6">
        <p className="pb-3">By: {author}</p>
        <h3 className="flex-1 text-3xl font-semibold leading-snug">
            <a href="https://www.fulcolibrary.org/blogs/post/favorite-lists-for-2023/?gad_source=1&gclid=CjwKCAjwh4-wBhB3EiwAeJsppBwkULIj8o3TiG2zTuZk97abf32TjBJFU7g1juUfMBOtLwW3hBs1jhoCZ3cQAvD_BwE" target="_blank">{bookName.slice(0, 15)}</a>
        </h3>
        <div className="py-3 md:py-1 space-x-1">
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
        <div className="font-medium py-2">
          <p className="text-lg">
            Publish: {yearOfPublishing}
          </p>
          <p className="text-base">Publisher: {publisher}</p>
        </div>
        <div className="mt-5 space-y-3 md:space-y-2 text-sm md:text-lg font-semibold">
          <p
            type="button"
            className="px-5 md:px-7 py-2 md:py-1 rounded-full bg-[#23BE0A] text-white"
          >Total Pages: {totalPages}</p>
          <p className="py-2 md:py-1 px-3 md:px-7 rounded-full bg-[#328EFF26] text-[#328EFF]">
            Category: {category}
          </p>
          <p className="py-2 md:py-1 px-3 md:px-7 rounded-full bg-[#FFAC3326] text-[#FFAC33] ">
            Rating: {rating}
          </p>
        </div>
      </div>
    </div>
  );
};
TopBooksCard.propTypes = {
  topBook: PropTypes.object,
};
export default TopBooksCard;
