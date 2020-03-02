import {
  POSTS_REQUEST,
  POSTS_SUCCESS,
  POSTS_END,
  POSTS_FAILURE
} from "./constants";

export const getPosts = async (dispatch: any, page: number, limit: number) => {
  dispatch({ type: POSTS_REQUEST });
  try {
    const posts = await fetch(
      `https://5e4dd4bc6272aa00142301cf.mockapi.io/posts?p=${page}&l=${limit}`
    );
    const json = await posts.json();
    if (json.length > 0) {
      dispatch({ type: POSTS_SUCCESS, payload: json });
    } else {
      dispatch({ type: POSTS_END });
    }
  } catch (error) {
    dispatch({ type: POSTS_FAILURE, payload: error.message });
  }
};
