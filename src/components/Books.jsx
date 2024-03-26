import PropTypes from "prop-types"; // ES6
import BookCard from "./BookCard";


const Books = ({books}) => {
  // console.log(books);
  return (
    <div>
      <h2 className="font-bold md:text-4xl text-center">Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10">
        {
          books.map((book,idx) => <BookCard key={idx} book={book}></BookCard>)
        }
      </div>
    </div>
  );
};
Books.propTypes = {
  books: PropTypes.array,
};
export default Books;
