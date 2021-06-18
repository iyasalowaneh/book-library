import { Link } from "react-router-dom";
import { P } from "../styles";
const Check = (props) => {
  const member = props.member;
  if (
    member.membership === "silver" &&
    member.currentlyBorrowedBooks.length < 2
  ) {
    return (
      <Link
        type="button"
        class="btn btn-success"
        to={`/members/${member.slug}/availablebooks`}
      >
        Barrow Book
      </Link>
    );
  } else if (
    member.membership === "gold" &&
    member.currentlyBorrowedBooks.length <= 2
  ) {
    return (
      <Link
        type="button"
        class="btn btn-success"
        to={`/members/${member.slug}/availablebooks`}
      >
        Barrow Book
      </Link>
    );
  } else if (
    member.membership === "platinum" &&
    member.currentlyBorrowedBooks.length < 5
  ) {
    return (
      <Link
        type="button"
        class="btn btn-success"
        to={`/members/${member.slug}/availablebooks`}
      >
        Barrow Book
      </Link>
    );
  } else
    return (
      <Link
        type="button"
        class="btn btn-warning"
        to={`/members/${member.slug}/bookedbooks`}
      >
        Sorry {member.firstName} you've Reached your Limit Return Book
      </Link>
    );
};

export default Check;
