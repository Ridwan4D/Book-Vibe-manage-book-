import PropTypes from "prop-types"; // ES6

const FamousWriteCard = ({ famousWriter }) => {
  const { name, nationality,biography, two_famous_books, birth_year, career, awards} =
    famousWriter;
  return (
    <div className="max-w-md p-8 sm:flex sm:space-x-6 text-center border-2 border-gray-600 rounded-xl">
      <div className="flex flex-col space-y-4">
        <div>
          <h2 className="text-2xl font-semibold">{name}</h2>
          <p>({nationality})</p>
        </div>
        <div className="md:py-3 text-start">
          <span className="font-bold text-[#131313]">Works At:</span>{" "}
          {career.map((tag, idx) => (
            <a
              key={idx}
              rel="noopener noreferrer"
              className="px-2 green-text rounded-full my-1"
            >
              {tag}
            </a>
          ))}
        </div>
        <div>

            <p className="text-start"><span className="font-semibold">Short Bio: </span>{biography}</p>
        </div>
        <div className="md:py-3  text-start">
          <span className="font-bold">Most Famous Books:</span>{" "}
          {two_famous_books.map((tag, idx) => (
            <a
              key={idx}
              rel="noopener noreferrer"
              className="px-2 rounded-full my-1"
            >
              {tag},
            </a>
          ))}
        </div>
        <div className="md:py-3 text-start">
          <span className="font-bold">Awards:</span>{" "}
          {awards.map((tag, idx) => (
            <a
              key={idx}
              rel="noopener noreferrer"
              className="px-2 rounded-full my-1 mx-1"
            >
              {tag},
            </a>
          ))}
        </div>
        
      </div>
    </div>
  );
};
FamousWriteCard.propTypes = {
  famousWriter: PropTypes.object,
};
export default FamousWriteCard;
