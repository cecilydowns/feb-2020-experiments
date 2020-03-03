import React from "react";

interface Props {
  author: string;
  avatar: string;
  title: string;
  body: string;
}

const PostItem = ({ author, avatar, title, body }: Props) => {
  return (
    <div className="post-item-wrapper">
      <h2>{title}</h2>
      <div className="body-text">{body}</div>
      <div className="avatar">
        <div className="author">
          <span className="posted-by">Author</span>
          {author}
        </div>
        <img src={avatar} alt={author} />
      </div>
    </div>
  );
};

export default PostItem;
