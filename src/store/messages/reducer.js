import * as types from "./constants";

const initialState = {
  all: [],
  selectedMessage: [],
  err: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ALL_MESSAGES_PENDING:
    case types.SEND_MESSAGE_PENDING:
    case types.DELETE_MESSAGE_PENDING:
    case types.SELECT_MESSAGE_PENDING:
      return state;

    case types.FETCH_ALL_MESSAGES_FAILED:
    case types.SEND_MESSAGE_FAILED:
    case types.DELETE_MESSAGE_FAILED:
    case types.SEND_MESSAGE_FAILED:
      return {
        ...state,
        err: action.payload
      };

    case types.FETCH_ALL_MESSAGES_SUCCESS:
      return {
        ...state,
        all: action.payload
      };

    case types.SEND_MESSAGE_SUCCESS:
      return {
        ...state,
        all: [action.payload, ...state.all]
      };

    case types.DELETE_MESSAGE_SUCCESS:
      return {
        ...state,
        all: state.all.filter(status => status.id === action.payload.id)
      };

    case types.SELECT_MESSAGE_SUCCESS:
      return {
        ...state,
        selectedMessage: action.payload
      };

    default:
      return state;
  }
};
