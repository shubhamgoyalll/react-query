import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import "../App.css";

const PostsRQ = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts"],
    //a callback fnc that always returns a promise
    queryFn: () => {
      return axios.get("http://localhost:4000/posts");
    },
  });

  //   console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <div className="post-list">
      {data?.data.map((post) => (
        <div key={post.id} className="post-item">
          <h3 className="post-title"> {post.title}</h3>
          <p className="post-body">{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsRQ;
