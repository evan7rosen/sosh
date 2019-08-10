import {
  FETCH_USERS_PENDING,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILED
} from "./constants";

let initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_PENDING:
      return state;
    case FETCH_USERS_SUCCESS:
      let userList = action.payload;
      return [...state, userList];
    case FETCH_USERS_FAILED:
      return action.payload;
    default:
      return state;
  }
};
