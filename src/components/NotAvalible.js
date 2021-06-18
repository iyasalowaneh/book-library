import BooksItem from "./BooksItem";
import { List } from "../styles";
import { useSelector } from "react-redux";
import members from "../members";
const NotAvalible = (props) => {
  const books = useSelector((state) => state.books);
  let NotAvalibleArray = props.books
    .filter((book) => book.available === "false")
    .map((book) => <BooksItem book={book} key={book.id} />);

  return <List>{NotAvalibleArray}</List>;
};

export default NotAvalible;
