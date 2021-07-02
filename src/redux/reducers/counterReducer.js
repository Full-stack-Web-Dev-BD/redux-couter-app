import actionTypes from "../actionTypes";

const initialState = { counter: 0 };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCRESE:
      return { ...state, counter: state.counter + action.payload };
    case actionTypes.DECRESE:
      return { ...state, counter: state.counter - action.payload };
    default:
      return state;
  }
};
export default counterReducer;
