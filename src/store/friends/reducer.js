import * as types from "./constants";

const initialState = {
  all: [],
  err: {},
  loggedInUser: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ALL_FRIENDS_PENDING:
    case types.ADD_FRIEND_PENDING:
    case types.REMOVE_FRIEND_PENDING:
      return state;

    case types.FETCH_ALL_FRIENDS_FAILED:
    case types.ADD_FRIEND_FAILED:
    case types.REMOVE_FRIEND_FAILED:
      return {
        ...state,
        err: action.payload
      };

    case types.FETCH_ALL_FRIENDS_SUCCESS:
      return {
        ...state,
        all: action.payload
      };

    case types.ADD_FRIEND_SUCCESS:
      return {
        ...state,
        all: [...state.all, action.payload]
      };

    case types.REMOVE_FRIEND_SUCCESS:
      return {
        ...state,
        all: state.all.filter(user => user.id === action.payload.id)
      };

    default:
      return state;
  }
};
