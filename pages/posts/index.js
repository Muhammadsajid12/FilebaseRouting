import React from "react";
import { useRouter } from "next/router";
import Button from "../component/ui/Button";

const HomePagePosts = () => {
  const { query } = useRouter();
  // const specificId = query;
  // if (!specificId) {
  //   return <p>loading</p>;
  // }

  const link = `posts/comments/c2`;
  console.log(query);
  return (
    <div>
      <h1> Posts Page</h1>
      <Button link={link}>btn</Button>
    </div>
  );
};

export default HomePagePosts;
