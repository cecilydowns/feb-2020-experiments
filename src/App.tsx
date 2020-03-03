import React, { Suspense, useReducer, useEffect, useRef } from "react";
import { getPosts } from "./api";
import "./App.scss";
import UnmountHiddenWrapper from "./UnmountHiddenWrapper";
import PostItem from "./PostItem";
import Loading from "./Loading";
import { reducer, initialState } from "./reducer";
import { Post } from "./types";
// Lazy loading components we don't need right away
const ErrorMessage = React.lazy(() => import("./ErrorMessage"));
const PostEndMessage = React.lazy(() => import("./PostEndMessage"));

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const loadingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (loadingRef && loadingRef.current && !state.loading && !state.end) {
      // Setting up IntersectionObserver to fetch posts when user nears page end
      const observer = new IntersectionObserver(
        (entries: any) => {
          entries.forEach((entry: any) => {
            if (entry.intersectionRatio === 1) {
              getPosts(dispatch, state.nextPage, 5);
              if (loadingRef.current !== null) {
                // Unobserving to prevent duplicate api calls
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
          />
        </UnmountHiddenWrapper>
      ))}
      <div ref={loadingRef} className="message">
        {state.loading && <Loading />}
      </div>
      <Suspense fallback={<Loading />}>
        {state.end && <PostEndMessage />}
      </Suspense>
      <Suspense fallback={<Loading />}>
        {state.error && <ErrorMessage error={state.error} />}
      </Suspense>
    </div>
  );
}

export default App;
