import { Link } from "react-router-dom";
import BookCheck from "./BookCheck";
const BooksItem = (props) => {
  let book = props.book;

  return (
    <div className="card" style={{ width: "14rem" }}>
      <img className="card-img-top" src={book.image} alt={book.title} />
      <div className="card-body">
        <h5 className="card-title">Title:{book.title}</h5>
        <p className="card-text">Author: {book.author}</p>
        <p class="card-text">
          Availablety:{" "}
          {book.available === "true" ? "avaliable" : "Not Avaliable"}
        </p>
        <Link to={`/books/${book.slug}`} className="btn btn-primary">
          Book Details
        </Link>
        <BookCheck book={book} />
      </div>
    </div>
  );
};

export default BooksItem;
