import { useRouter } from "next/router";
import React from "react";

export default function Documents() {
  const router = useRouter();
  const params = router.query.params || [];

  if (params.length == 2) {
    return (
      <h1>
        This doc page for {params[0]} and {params[1]}
      </h1>
    );
  }
  if (params.length == 1) {
    return (
      <h1>
        This doc page for {params[0]}
      </h1>
    );
  }
  // console.log(params)
  return (
    <div>
      <h1>Documents home page </h1>
    </div>
  );
}
