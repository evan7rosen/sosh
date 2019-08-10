import {
  FETCH_STATUS_PENDING,
  FETCH_STATUS_SUCCESS,
  FETCH_STATUS_FAILED
} from "./constants";

let initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STATUS_PENDING:
      return state;
    case FETCH_STATUS_SUCCESS:
      let statusList = action.payload;
      return [...state, statusList];
    case FETCH_STATUS_FAILED:
      return action.payload;
    default:
      return state;
  }
};
