import { useSelector } from "react-redux";
import { useParams, Redirect } from "react-router";
import { Link } from "react-router-dom";
import { List } from "../styles";
const BookDetials = () => {
  const books = useSelector((state) => state.books);

  const bookSlug = useParams().bookSlug;
  const book = books.find((book) => book.slug === bookSlug);
  if (!book) return <Redirect to="/books" />;

  return (
    <List>
      <div class="card" style={{ width: "20rem" }}>
        <img src={book.image} alt={book.title} class="card-img-top" />
        <div class="card-body">
          <h5 class="card-title">Title:{book.title}</h5>
          <p class="card-text">Author: {book.author}</p>
          <p class="card-text">Genre: {book.genre}</p>
          <p class="card-text">
            Availablety:{" "}
            {book.available === "true" ? "avaliable" : "Not Avaliable"}
          </p>
          <p class="card-text">Borrowed By: {book.borrowedBy.length} Members</p>

          <Link to="/" class="btn btn-primary">
            Go Back
          </Link>
        </div>
      </div>
    </List>
  );
};

export default BookDetials;
