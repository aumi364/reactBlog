import React, { useState, useEffect } from "react";
import { getPosts } from "Services/PostService";
const PostContext = React.createContext({
  toggler: {},
  posts: null,
  error: null,
});

export const PostContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([]); //initialized state for storing posts
  const [toggle, setToggle] = useState(false); // to track if new data is inserted
  const [error, setError] = useState(); // if any error returns
  useEffect(() => {
    (async () => {
      const response = await getPosts();
      if (response.status === 200) {
        setPosts(response.data); //storing the response in the state
      } else {
        setError(response.status);
      }
    })();
  }, [toggle]);
  return (
    <PostContext.Provider
      value={{
        toggler: { toggle, setToggle },
        posts: posts,
        error: error,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
export default PostContext;
