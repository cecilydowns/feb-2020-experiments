import React from "react";
import Particles from "react-particles-js";

const PostEndMessage = () => (
  <div className="message">
    <div>No more posts to show!</div>
    <br />
    <Particles
      params={{
        particles: {
          color: { value: "#000000" },
          line_linked: { color: "#000000" }
        }
      }}
    />
  </div>
);

export default PostEndMessage;
