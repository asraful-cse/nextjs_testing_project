import React from "react";
import Link from "next/link";
export default function blog() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>This blog page</h1>
      <Link href="blogs/1">
        <a>blog 1</a>
      </Link>
      <br />
      <Link href="blogs/2">
        <a>blog 2</a>
      </Link>
      <br />
      <Link href="blogs/3">
        <a>blog 3</a>
      </Link>
    </div>
  );
}
