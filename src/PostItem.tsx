import React from "react";

interface Props {
  createdAt: string;
  author: string;
  avatar: string;
  title: string;
  body: string;
}

const PostItem = ({ createdAt, author, avatar, title, body }: Props) => {
  return <div>Post item!!!</div>;
};

export default PostItem;
