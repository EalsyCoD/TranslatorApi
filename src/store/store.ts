import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";

import { RootState } from "./types";
import { TranslateReducer } from "./reducers/TranslateReducer";
import { LanguageReducer } from "./reducers/LanguageReducer";
import { TranslateDefaultReducer } from "./reducers/TranslateDefaultReducer";

const reducer = combineReducers<RootState>({
  languages: LanguageReducer,
  translate: TranslateReducer,
  translateDefault: TranslateDefaultReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
