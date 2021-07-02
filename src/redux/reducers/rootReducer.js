import counterReducer from "./counterReducer";

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
