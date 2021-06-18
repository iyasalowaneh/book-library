import { useSelector } from "react-redux";
import { useParams, Redirect } from "react-router";
import { Link } from "react-router-dom";
import Check from "./Check";
const MemberProfile = () => {
  const memberSlug = useParams().memberSlug;
  const members = useSelector((state) => state.members);

  const member = members.find((member) => member.slug === memberSlug);
  if (!member) return <Redirect to="/members" />;

  return (
    <div>
      <div class="card" style={{ width: "20rem" }}>
        <img src={member.image} alt={member.firstName} class="card-img-top" />
        <div class="card-body">
          <h5 class="card-title">
            Title:{member.firstName} {member.lastName}
          </h5>
          <p class="card-text">
            Borrowed Books: {member.currentlyBorrowedBooks.length}
          </p>
          <p class="card-text">
            membership
            {member.membership === "silver"
              ? " Silver:  2 books max"
              : member.membership === "gold"
              ? " gold :3 books max"
              : " Platinum: 5 books max"}
          </p>
          <Check member={member} />

          <Link to="./members" class="btn btn-primary">
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MemberProfile;
