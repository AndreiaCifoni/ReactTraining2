import { CREATE_NOTE, EDIT_NOTE, DELETE_NOTE } from "../actions/type";

const noteReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_NOTE:
      return state;
    default:
      return state;
  }
};

export default noteReducer;
