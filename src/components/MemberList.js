import { useState } from "react";
import members from "../members";
import MemberItem from "./MemberItem";
import { List } from "../styles";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";

const MemberList = () => {
  const [person, setPerson] = useState("");
  const members = useSelector((state) => state.members);
  let membersArray = members
    .filter((member) =>
      member.firstName.toLowerCase().includes(person.toLowerCase())
    )
    .map((member) => <MemberItem member={member} key={member.id} />);
  return (
    <div>
      <div>
        <div class="input-group flex-nowrap">
          <span class="input-group-text" id="addon-wrapping">
            🔎
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Search For a Member Name"
            aria-label="Search For a Member Name"
            aria-describedby="addon-wrapping"
            onChange={(event) => setPerson(event.target.value)}
          />
        </div>
      </div>
      <List>
        <div class="container">
          <div class="row">{membersArray}</div>
        </div>
      </List>
    </div>
  );
};

export default MemberList;
