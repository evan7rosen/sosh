import {
  FETCH_STATUS_PENDING,
  FETCH_STATUS_SUCCESS,
  FETCH_STATUS_FAILED
} from "./constants";
import axios from "axios";

export const fetchStatus = status => dispatch => {
  dispatch({
    type: FETCH_STATUS_PENDING
  });
  axios
    .get(`http://localhost:8082/api/statuses`)
    .then(res => {
      dispatch({
        type: FETCH_STATUS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: FETCH_STATUS_FAILED,
        payload: err
      });
    });
};
