import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

export default function Home() {
  const router = useRouter();
  const handleToClick = () => {
    router.replace("/blogs");
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Home page------------</h1>
      <Link href="/blogs">
        <a>
          <button>Click to Blogs</button>
        </a>
      </Link>
      <Link href="/about">
        <a>
          <button>Click to About</button>
        </a>
      </Link>
      <br />
      <button onClick={handleToClick}>Transfer Button</button>
    </div>
  );
}
