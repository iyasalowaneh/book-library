export const ADD_BOOK = "ADD_BOOK";
export const ADD_MEMBER = "ADD_MEMBER";
export const RES_BOOK = "RES_BOOK";
export const addBook = (newBook) => {
  return {
    type: ADD_BOOK,
    payload: {
      newBook: newBook,
    },
  };
};

export const addMember = (newMember) => {
  return {
    type: ADD_MEMBER,
    payload: {
      newMember: newMember,
    },
  };
};

export const resBook = (reqBook) => {
  return {
    type: RES_BOOK,
    payload: {
      reqBook: reqBook,
    },
  };
};
