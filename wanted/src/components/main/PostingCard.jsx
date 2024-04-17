import React from "react";

const PostingCard = ({ post }) => {
  return (
    <div>
      <div className="userHeader">
        <img src={post.thumbnailImageURL} alt="user" />
        <span>{post.homePostingUser.nickname}</span>
      </div>
      <div className="postingBody">
        <img src={post.thumbnailImageURL} alt="img" />
        <p>{post.title}</p>
        <p>{post.htmlContent.slice(0, 10)}</p>
      </div>
      <div className="postingFooter">
        <span>{post.starCnt}</span>
      </div>
    </div>
  );
};

export default PostingCard;
