import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import members from "../members";
import { resBook } from "../store/actions";

const BookCheck = (props) => {
  const dispatch = useDispatch();

  const getBook = () => {
    if (book) {
      dispatch(resBook(book));
    }
  };

  const book = props.book;
  if (book.available == "true") {
    return (
      <Link onClick={getBook} type="button" class="btn btn-success">
        Barrow
      </Link>
    );
  } else
    return (
      <Link onClick={getBook} type="button" class="btn btn-danger">
        Return
      </Link>
    );
};
export default BookCheck;
