import rootReducer from "./reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const DataProvider = ({ children }) => {
  return <Provider store={store}> {children} </Provider>;
};
export default DataProvider;
