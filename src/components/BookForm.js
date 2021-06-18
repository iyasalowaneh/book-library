import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { addBook } from "../store/actions";

const BookForm = () => {
  const bookSlug = useParams().bookSlug;
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const history = useHistory();
  const [book, setBook] = useState({
    author: "",
    title: "",
    genre: "",
    image: "",
  });
  const handelChange = (event) => {
    setBook({ ...book, [event.target.name]: event.target.value });
  };

  const handelSubmit = (event) => {
    event.preventDefault();
    dispatch(addBook(book));
    history.push("/");
  };

  return (
    <form onSubmit={handelSubmit}>
      <div class="mb-3">
        <label for="formGroupExampleInput" class="form-label">
          Author Name
        </label>
        <input
          type="text"
          class="form-control"
          id="formGroupExampleInput"
          placeholder="Author Name"
          name="author"
          onChange={handelChange}
          value={book.author}
        />
      </div>
      <div class="mb-3">
        <label for="formGroupExampleInput2" class="form-label">
          Book Title
        </label>
        <input
          type="text"
          class="form-control"
          id="formGroupExampleInput2"
          placeholder="Book Title"
          name="title"
          onChange={handelChange}
          value={book.title}
        />
      </div>
      <div class="mb-3">
        <label for="formGroupExampleInput" class="form-label">
          Book Genre
        </label>
        <input
          type="text"
          class="form-control"
          id="formGroupExampleInput"
          placeholder="Book Genre"
          name="genre"
          onChange={handelChange}
          value={book.genre}
        />
      </div>
      <div class="mb-3">
        <label for="formGroupExampleInput2" class="form-label">
          Book Image
        </label>
        <input
          type="url"
          class="form-control"
          id="formGroupExampleInput2"
          placeholder="Book Image url"
          name="image"
          onChange={handelChange}
          value={book.image}
        />
      </div>
      <div class="mb-3">
        <label for="formGroupExampleInput" class="form-label">
          Book Genre
        </label>
        <input
          type="number"
          class="form-control"
          id="formGroupExampleInput"
          placeholder="borrowedBy"
          name="borrowedBy"
          onChange={handelChange}
          value={book.borrowedBy}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default BookForm;
