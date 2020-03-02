import React, { useReducer, useState, useEffect, useRef } from "react";
import { getPosts } from "./api";
import "./App.scss";

import UnmountHiddenWrapper from "./UnmountHiddenWrapper";
import PostItem from "./PostItem";

import { reducer, initialState } from "./reducer";

import { Post } from "./types";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const loadingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (loadingRef && loadingRef.current && !state.loading && !state.end) {
      const observer = new IntersectionObserver(
        (entries: any) => {
          entries.forEach((entry: any) => {
            if (entry.intersectionRatio === 1) {
              getPosts(dispatch, state.nextPage, 5);
              if (loadingRef.current !== null) {
                observer.unobserve(loadingRef.current);
              }
            }
          });
        },
        {
          rootMargin: "250px 0px",
          threshold: [1]
        }
      );

      observer.observe(loadingRef.current);
    }
  }, [dispatch, state.nextPage, state.loading, state.end]);

  return (
    <div className="app-wrapper">
      <h1>
        <span>Infinate Scroll Post List</span>
      </h1>
      {(state.posts as Array<Post>).map(post => (
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
      <div ref={loadingRef} className="message">
        {state.loading && "Loading..."}
      </div>
      {state.end && <div className="message">No more posts to show!</div>}
      {state.error && <div className="message error">{state.error}</div>}
    </div>
  );
}

export default App;
