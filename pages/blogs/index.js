import React from "react";
import Link from "next/link";
export default function blog({ data }) {
  console.log(data);
  return (
    <div
      style={{
        textAlign: "center",
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
      }}
    >
      <h1>This blog page</h1>
      <br />
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
      <br />
      {/* for data pass by the props and destructuring */}
      {data.map((post) => {
        return (
          <div
            key={post.id}
            style={{
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <div
              style={{
                fontSize: "13px",
                alignItems: "center",
                textAlign: "center",
                justifyContent: "center",
                border: "1px solid yellow",
                maxWidth: "500px",
                padding: "30px",
                margin: "20px",
              }}
            >
              <h1>Title: {post.title}</h1>
              <p>Body :{post.body}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
