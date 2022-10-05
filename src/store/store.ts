import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";

import { reducers } from "../store/reducers";

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
