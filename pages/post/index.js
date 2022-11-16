import React, { Fragment } from "react";
import { getAllPosts } from "../../dummy-data2";
import PostList from "./ui/postlist";

const Posts = () => {
  const allPosts = getAllPosts();

  console.log(allPosts);
  return (
    <Fragment>
      <p>Postlist component</p>
      <PostList items={allPosts} />
    </Fragment>
  );
};

export default Posts;
