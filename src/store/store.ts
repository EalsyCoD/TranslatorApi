import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";

import { RootState } from "./types";
import { TranslateReducer } from "./reducers/TranslateReducer";
import { LanguageReducer } from "./reducers/LanguageReducer";
import { TranslateDefaultReducer } from "./reducers/TranslateDefaultReducer";
import LoaderReducer from "./reducers/LoaderReducer";

const reducer = combineReducers<RootState>({
  languages: LanguageReducer,
  translate: TranslateReducer,
  translateDefault: TranslateDefaultReducer,
  loader: LoaderReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
