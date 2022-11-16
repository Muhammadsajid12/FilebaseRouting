import React from "react";
import { useRouter } from "next/router";
import Button from "../component/ui/Button";

const Slug = () => {
  const { query } = useRouter();
  const specificId = query.slug;

  if (!specificId) {
    return <p>loading</p>;
  }
  const id = specificId[0];
  const link = `posts/comments/c2`;
  console.log(specificId[0]);
  return (
    <div>
      <h1> Here is slug Page</h1>
      <Button link={link}>goComments</Button>
    </div>
  );
};

export default Slug;
