import {
  POSTS_REQUEST,
  POSTS_SUCCESS,
  POSTS_END,
  POSTS_FAILURE
} from "./constants";
import { State, Action } from "./types";

export const initialState = {
  posts: [],
  nextPage: 1,
  loading: false,
  end: false,
  error: ""
};

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case POSTS_REQUEST:
      return { ...state, loading: true };
    case POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        nextPage: state.nextPage + 1,
        posts: [...state.posts, ...action.payload]
      };
    case POSTS_END:
      return { ...state, loading: false, end: true };
    case POSTS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
