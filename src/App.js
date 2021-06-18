import { Route, Switch } from "react-router";
import BookList from "./components/BookList";
import BookDetials from "./components/BookDetials";
import BookForm from "./components/BookForm";
import NavBar from "./components/NavBar";
import MemberList from "./components/MemberList";
import MembersForm from "./components/MembersForm";
import MemberProfile from "./components/MemberProfile";
import books from "./books";
import members from "./members";
import AvalibleBooks from "./components/AvalibleBooks";
import NotAvalible from "./components/NotAvalible";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/members/:memberSlug/availablebooks">
          <AvalibleBooks books={books} />
        </Route>
        <Route path="/members/:memberSlug/bookedbooks">
          <NotAvalible books={books} />
        </Route>

        <Route path="/members/:memberSlug">
          <MemberProfile members={members} />
        </Route>
        <Route path="/books/:bookSlug">
          <BookDetials books={books} />
        </Route>
        <Route path="/addmember">
          <MembersForm />
        </Route>
        <Route path="/addbook">
          <BookForm />
        </Route>
        <Route path="/members">
          <MemberList />
        </Route>
        <Route exact path="/">
          <BookList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
