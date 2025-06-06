import Likes from "@/components/Likes";
import Link from "next/link";
import { Suspense } from "react";
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

      <div>
        <ol>
          // stream line next js h
          <Suspense fallback='Loading...'>
            <Likes />
          </Suspense>
        </ol>
      </div>

    </>
  );
}