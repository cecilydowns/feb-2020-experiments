import React, { useState, useEffect } from "react";
import { getPosts } from "./api";
import "./App.scss";
import { string } from "prop-types";

import UnmountHiddenWrapper from "./UnmountHiddenWrapper";
import PostItem from "./PostItem";

import { Post } from "./types";

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts(1, 100).then(res => setPosts(res));
  }, []);

  return (
    <div className="app-wrapper">
      {posts.map((post: Post) => (
        <UnmountHiddenWrapper key={post.id}>
          <PostItem
            title={post.title}
            body={post.body}
            author={post.author}
            avatar={post.avatar}
            createdAt={post.createdAt}
          />
        </UnmountHiddenWrapper>
      ))}
    </div>
  );
}

export default App;
