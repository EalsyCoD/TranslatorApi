import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";

import { RootState } from "./types";
import { TranslateReducer } from "./reducers/TranslateReducer";
import { LanguageReducer } from "./reducers/LanguageReducer";
import { TranslateDefaultReducer } from "./reducers/TranslateDefaultReducer";
import LoaderReducer from "./reducers/LoaderReducer";
import notificationReducer from "./reducers/NotificationReducer";
import { DetectedReducer } from "./reducers/DetectedReducer";
import { FavoritesReducer } from "./reducers/FavoritesReducer";

const reducer = combineReducers<RootState>({
  languages: LanguageReducer,
  translate: TranslateReducer,
  translateDefault: TranslateDefaultReducer,
  loader: LoaderReducer,
  notification: notificationReducer,
  detected: DetectedReducer,
  favorites: FavoritesReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
