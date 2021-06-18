import BooksItem from "./BooksItem";
import { List } from "../styles";
import { useSelector } from "react-redux";

const AvalibleBooks = (props) => {
  const books = useSelector((state) => state.books);

  let AvalibleBooksArray = props.books
    .filter((book) => book.available === "true")
    .map((book) => <BooksItem book={book} key={book.id} />);

  return <List>{AvalibleBooksArray}</List>;
};

export default AvalibleBooks;
