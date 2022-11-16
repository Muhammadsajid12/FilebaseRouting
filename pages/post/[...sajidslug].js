import React from "react";
import { useRouter } from "next/router";
import { getFeaturedcommentsbyId } from "../../dummy-data2";

const sajidSlug = () => {
  const router = useRouter();
  const slugarr = router.query.sajidslug;
  if (!slugarr) {
    return <p> page is loading</p>;
  }
  const slug = slugarr[1];

  const commentobj = getFeaturedcommentsbyId(slug);

  const comments = commentobj[0].Comments;
  console.log(comments);

  const event = router.query;
  console.log(event);
  return (
    <div>
      <h1> Comments Slug</h1>
      {comments.map((comment) => (
        <p>{comment}</p>
      ))}
    </div>
  );
};

export default sajidSlug;
