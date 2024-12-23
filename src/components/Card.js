import React from "react";

const Card = ({ post }) => {
  return (
    <div className="post-item">
      <h2 className="post-title">{post.title}</h2>
      <p className="post-details">
        <span className="post-author">By {post.author}</span> in{" "}
        <span className="post-subreddit">r/{post.subreddit}</span>
      </p>
      <p className="post-info">
        <span className="post-upvotes">👍 {post.ups} upvotes</span> |{" "}
        <span className="post-comments">💬 {post.num_comments} comments</span>
      </p>
      <a
        href={post.url}
        className="post-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Post
      </a>
    </div>
  );
};

export default Card;
