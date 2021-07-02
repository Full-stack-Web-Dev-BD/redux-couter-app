import actionTypes from "../actionTypes";

export const increse = (payload) => async (dispatch) => {
  dispatch({
    type: actionTypes.INCRESE,
    payload: payload,
  });
};

export const deccrese = (payload) => async (dispatch) => {
  dispatch({
    type: actionTypes.DECRESE,
    payload: payload,
  });
};
