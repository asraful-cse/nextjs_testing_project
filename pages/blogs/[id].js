import React from "react";
import { useRouter } from "next/router";

function BlogPostDetails() {
  const router = useRouter();
  const id = router.query.id;
  console.log("id", id);
  return (
    <div>
      <h1>Blog details id and commit: {id}</h1>
    </div>
  );
}

export default BlogPostDetails;
