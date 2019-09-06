import * as types from "./constants";
import axios from "axios";
import { BASE_URL } from "./constants";

export const fetchAllMessages = () => async dispatch => {
  dispatch({
    type: types.FETCH_ALL_MESSAGES_PENDING
  });
  try {
    let response = await axios.get(BASE_URL);
    dispatch({
      type: types.FETCH_ALL_MESSAGES_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.FETCH_ALL_MESSAGES_FAILED,
      payload: err
    });
  }
};

export const sendMessage = newMessage => async dispatch => {
  dispatch({
    type: types.SEND_MESSAGE_PENDING
  });
  try {
    let response = await axios.post(BASE_URL, newMessage);
    dispatch({
      type: types.SEND_MESSAGE_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.SEND_MESSAGE_FAILED,
      payload: err
    });
  }
};

export const selectMessage = user => dispatch => {
  dispatch({
    type: types.SELECT_MESSAGE_PENDING
  });
  try {
    dispatch({
      type: types.SELECT_MESSAGE_SUCCESS,
      payload: user
    });
  } catch (err) {
    dispatch({
      type: types.SELECT_MESSAGE_FAILED,
      payload: err
    });
  }
};
