import React from "react";
import Button from "../../component/ui/Button";
import Link from "next/dist/client/link";

const PostItem = (props) => {
  const { id, name, comments, posts } = props;
  //   console.log(id);
  //   const link = `/post/${name}/${id}`;
  const postlink = `/post/${name}`;
  return (
    <div>
      <div>
        <h1>Name:{name}</h1>
      </div>
      <div>
        <h1>Post: </h1>
      </div>
      <div>
        <Button link={postlink}>Post:{name} </Button>{" "}
      </div>
      {/* <div>
        <Button link={link}> comments</Button>
      </div> */}
      <hr />
    </div>
  );
};

export default PostItem;
