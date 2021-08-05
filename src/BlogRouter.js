import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ViewPost from "Pages/ViewPost/ViewPost";
import ShowPost from "Pages/ShowPost/ShowPost";
import CreatePost from "Pages/CreatePost/CreatePost";
const BlogRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/posts" />
        </Route>
        <Route exact path="/posts">
          <ViewPost />
        </Route>
        <Route exact path="/posts/create">
          <CreatePost />
        </Route>
        <Route path="/posts/:postId">
          <ShowPost />
        </Route>
      </Switch>
    </Router>
  );
};

export default BlogRouter;
