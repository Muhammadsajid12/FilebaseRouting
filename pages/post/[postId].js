import React from "react";
import Link from "next/dist/client/link";
import { getFeaturedPostsbyId } from "../../dummy-data2";
import { useRouter } from "next/router";
import Button from "../component/ui/Button";

const Abc = () => {
  const router = useRouter();
  const eventId = router.query.postId;

  const posts = getFeaturedPostsbyId(eventId);
  const sname = posts[0];
  console.log(sname);
  // const sposts = sname.posts;

  if (!sname) {
    return <p> Page is loading </p>;
  }

  const commentslink = `/post/${sname.name}/${sname.slug}`;
  console.log(commentslink);
  const sposts = sname.posts;
  console.log(sposts);
  // function linkHandler() {
  //   router.push("post/abc/commenits");
  // }

  return (
    <div>
      <h1>Post by Selected User Name:</h1>

      {sposts.map((post) => (
        <div key={sname.id}>
          <p>{post}</p>
          <Button link={commentslink}>Comments</Button>
        </div>
      ))}
    </div>
  );
};

export default Abc;
