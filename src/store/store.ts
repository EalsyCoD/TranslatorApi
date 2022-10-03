import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";

import { RootState } from "./types";
import LanguageReducer from "./reducers/LanguageReducer";

const reducer = combineReducers<RootState>({
  languages: LanguageReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
