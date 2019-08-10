import {
  FETCH_USERS_PENDING,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILED
} from "./constants";
import axios from "axios";

export const fetchUsers = users => dispatch => {
  dispatch({
    type: FETCH_USERS_PENDING
  });
  axios
    .get(`http://localhost:8082/api/users`)
    .then(res => {
      dispatch({
        type: FETCH_USERS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: FETCH_USERS_FAILED,
        payload: err
      });
    });
};
