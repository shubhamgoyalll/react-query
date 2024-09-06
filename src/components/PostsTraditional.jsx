import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

const PostsTraditional = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchPosts = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("http://localhost:4000/posts");
      setPosts(response.data);
    } catch (error) {
      setIsError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error has occured...</div>;
  }

  return (
    <div className="post-list">
      {posts.map((post) => (
        <div key={post.id} className="post-item">
          <h3 className="post-title"> {post.title}</h3>
          <p className="post-body">{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsTraditional;
