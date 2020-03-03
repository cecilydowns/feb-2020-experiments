export type State = {
  posts: Array<Post>;
  nextPage: number;
  loading: boolean;
  error: string;
  end: boolean;
};

export type Post = {
  id: string;
  createdAt: string;
  author: string;
  avatar: string;
  title: string;
  body: string;
};

export type Action = {
  type: "POSTS_REQUEST" | "POSTS_SUCCESS" | "POSTS_END" | "POSTS_FAILURE";
  payload?: any;
};
