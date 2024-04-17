import React from "react";
import { posting } from "../../assets/posting";
import PostingCard from "./PostingCard";

const MainPosting = () => {
  return (
    <div
      style={{
        margin: "15px",
        border: "1px solid red",
        width: "100%",
        height: "500px",
      }}
    >
      {posting.map((post, idx) => (
        <PostingCard key={post.postingID} post={post} />
      ))}
    </div>
  );
};

export default MainPosting;
