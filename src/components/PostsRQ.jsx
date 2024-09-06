import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import "../App.css";

const PostsRQ = () => {
  const { data, isLoading, isError, error, isFetching } = useQuery({
    //can add query params in this array
    queryKey: ["posts"],
    //a callback fnc that always returns a promise
    queryFn: () => {
      return axios.get("http://localhost:4000/posts");
    },
    // for next 10 sec,the network call will not be made
    // staleTime: 10000,

    //polling : refetches the data every mentioned time (1 sec in this case)
    refetchInterval: 1000,
    //will reftech data now even if we change tabs
    refetchIntervalInBackground: true,
  });

  //   console.log(data);
  console.log(isLoading, isFetching);

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
