import React, { useState, useEffect } from "react";
import Card from "./Card";

const CardList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://www.reddit.com/r/reactjs/.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setPosts(data.data.children.map((child) => child.data));
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) return <p>Loading cards...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div className="post-list">
      {posts.map((post, index) => (
        <Card key={post.id || index} post={post} />
      ))}
    </div>
  );
};

export default CardList;
