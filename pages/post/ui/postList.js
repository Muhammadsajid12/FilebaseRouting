import React, { Fragment } from "react";
import PostItem from "./postitem";

const PostList = (props) => {
  console.log(props);
  const { items } = props;
  console.log(items);
  return (
    <>
      <h1>Herlp form </h1>
      <div>
        <div>
          {items.map((post) => (
            <PostItem
              key={post.id}
              id={post.id}
              name={post.name}
              posts={post.posts}
              comments={post.comments}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default PostList;
