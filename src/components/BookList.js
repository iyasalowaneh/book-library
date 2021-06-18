import { useState } from "react";
import books from "../books";
import BooksItem from "./BooksItem";
import { List } from "../styles";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";

const BookList = () => {
  const [query, setQuery] = useState("");
  const books = useSelector((state) => state.books);

  const booksArray = books
    .filter(
      (book) =>
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.genre.toLowerCase().includes(query.toLowerCase())
    )
    .map((book) => <BooksItem book={book} key={book.id} />);

  return (
    <div>
      <SearchBar setQuery={setQuery} />

      <List>
        <div class="container">
          <div class="row">{booksArray}</div>
        </div>
      </List>
    </div>
  );
};

export default BookList;
