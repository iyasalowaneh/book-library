import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { addMember } from "../store/actions";

const MembersForm = () => {
  const memberSlug = useParams().memberSlug;
  const members = useSelector((state) => state.members);
  const dispatch = useDispatch();
  const history = useHistory();
  const [member, setMember] = useState({
    firstName: "",
    lastName: "",
    membership: "",
    image: "",
  });
  const handelChange = (event) => {
    setMember({ ...member, [event.target.name]: event.target.value });
  };

  const handelSubmit = (event) => {
    event.preventDefault();
    dispatch(addMember(member));
    history.push("/members");
  };

  return (
    <form onSubmit={handelSubmit}>
      <div class="mb-3">
        <label for="formGroupExampleInput" class="form-label">
          First Name
        </label>
        <input
          type="text"
          class="form-control"
          id="formGroupExampleInput"
          placeholder="First Name"
          name="firstName"
          onChange={handelChange}
          value={member.firstName}
        />
      </div>
      <div class="mb-3">
        <label for="formGroupExampleInput2" class="form-label">
          Last Name
        </label>
        <input
          type="text"
          class="form-control"
          id="formGroupExampleInput2"
          placeholder="Last Name"
          name="lastName"
          onChange={handelChange}
          value={member.lastName}
        />
      </div>

      <div class="mb-3">
        <label for="formGroupExampleInput2" class="form-label">
          Member Image
        </label>
        <input
          type="url"
          class="form-control"
          id="formGroupExampleInput2"
          placeholder="Member Image"
          name="image"
          onChange={handelChange}
          value={member.image}
        />
      </div>

      <div class="mb-3">
        <label for="formGroupExampleInput2" class="form-label">
          Membership
        </label>
        <input
          type="text"
          class="form-control"
          id="formGroupExampleInput2"
          placeholder="Silver, Gold or Platinum"
          name="membership"
          onChange={handelChange}
          value={member.membership}
        />
      </div>
      <div class="mb-3">
        <label for="formGroupExampleInput2" class="form-label">
          BorrowedBooks{" "}
        </label>
        <input
          type="number"
          class="form-control"
          id="formGroupExampleInput2"
          placeholder="Number of Books"
          name="currentlyBorrowedBooks"
          onChange={handelChange}
          value={member.currentlyBorrowedBooks}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default MembersForm;
