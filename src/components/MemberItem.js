import { Link } from "react-router-dom";

const MemberItem = (props) => {
  let member = props.member;

  return (
    <div className="card" style={{ width: "14rem" }}>
      <img className="card-img-top" src={member.image} alt="member" />
      <div className="card-body">
        <h6 className="card-title">
          Name : {member.firstName} {member.lastName}
        </h6>

        <Link to={`/members/${member.slug}`} className="btn btn-primary">
          Member Details
        </Link>
      </div>
    </div>
  );
};

export default MemberItem;
