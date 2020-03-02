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
