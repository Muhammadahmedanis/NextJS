import Link from "next/link";
export default function Blog() {
  return (
    <>
      <h1>All Blogs</h1>
      <p>
        <Link href='/'>Blog1</Link>
      </p>
      <p>
        <Link href='/'>Blog2</Link>
      </p>
    </>
  );
}