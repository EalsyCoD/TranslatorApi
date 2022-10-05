export type Data = {
  from: string;
  to: string;
};

export interface FavoritesState {
  favorites: {
    from: string;
    to: string;
  };
}

export interface FavoritesAction {
  type: string;
  payload: FavoritesState;
}

const initialState: FavoritesState = {
  favorites: {
    from: "",
    to: "",
  },
};

export const FavoritesReducer = (
  state: FavoritesState = initialState,
  action: FavoritesAction
): FavoritesState => {
  switch (action.type) {
    case "NEW-FAVORITES":
      return action.payload;
    default:
      return state;
  }
};
