import Link from "next/link";

function error() {
  return (
    <div style={{alignItems: 'center', textAlign:'center'}}>
      <h1>This is Error page</h1>

      <br />
      <Link href="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
}

export default error;
