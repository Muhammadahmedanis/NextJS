// "use client";
import Image from "next/image";

// as a prop searchParams and params is a promise

export const dynamic = "force-dynamic";
// to make static page dynamic we use above code

import Link from "next/link";
export default async function Home({ searchParams, params}) {
  return (
    <>
      <h1>Welcome to my page</h1>
      <Link href='/about'>About</Link>{' '}
      <Link href='/services'>Service</Link>
      <p>
        <Link href='/blog'>Blog</Link>
      </p>
      <Image src='/next.svg' width={400} height={300} alt="not found" quality={70} />  // next js bulld in component that optimize image by default qulity has 75% 
    </>
  );
}
