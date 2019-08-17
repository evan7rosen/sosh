import * as types from "./constants";

export const fetchAllStatuses = () => async dispatch => {
    dispatch({
      type: types.FETCH_ALL_STATUSES_PENDING
    });
    try {
      let response = await axios.get(BASE_URL);
      dispatch({
        type: types.FETCH_ALL_STATUSES_SUCCESS,
        payload: response.data
      });
    } catch (err) {
      dispatch({
        type: types.FETCH_ALL_STATUSES_FAILED,
        payload: err
      });
    }
  };