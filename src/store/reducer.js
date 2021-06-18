import { ADD_BOOK, ADD_MEMBER, RES_BOOK } from "./actions";
import booksData from "../books";
import membersData from "../members";
import slugify from "slugify";

const initialState = { books: booksData, members: membersData };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      action.payload.newBook.id = state.books.length + 1;
      action.payload.newBook.slug = slugify(action.payload.newBook.title);
      return {
        ...state,
        books: [...state.books, action.payload.newBook],
      };

    case RES_BOOK:
      if (action.payload.reqBook.available === "false") {
        action.payload.reqBook.available = "true";
      } else action.payload.reqBook.available = "false";

      return {
        ...state,
        books: [...state.books],
      };

    case ADD_MEMBER:
      action.payload.newMember.id = state.members.length + 1;
      action.payload.newMember.slug = slugify(
        action.payload.newMember.firstName
      );

      return {
        ...state,
        members: [...state.members, action.payload.newMember],
      };

    default:
      return state;
  }
};

export default reducer;
