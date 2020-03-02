import React, { useState, useEffect, useRef } from "react";
import { getPosts } from "./api";
import "./App.scss";

import UnmountHiddenWrapper from "./UnmountHiddenWrapper";
import PostItem from "./PostItem";

import { Post } from "./types";

function App() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const loadingRef = useRef<HTMLDivElement>(null);

  const loadMorePosts = () => {
    if (!loading) {
      setLoading(true);
      getPosts(page, 5).then(res => {
        setLoading(false);
        setPosts(prevState => {
          return [...prevState, res];
        });
      });
    }
    console.log("loading more posts!!!");
  };

  useEffect(() => {
    if (loadingRef && loadingRef.current) {
      const callback = (entries: any) => {
        entries.forEach((entry: any) => {
          if (entry.intersectionRatio * 100 > 0) {
            loadMorePosts();
          }
        });
      };

      const observer = new IntersectionObserver(callback, {
        rootMargin: "750px 0px",
        threshold: [1]
      });

      observer.observe(loadingRef.current);
    }
  }, []);

  return (
    <div className="app-wrapper">
      <h1>
        <span>Infinate Scroll Post List</span>
      </h1>
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
      <div ref={loadingRef} className="loading">
        {loading && "Loading..."}
      </div>
    </div>
  );
}

export default App;
