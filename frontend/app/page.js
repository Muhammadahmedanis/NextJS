// "use client";
// import Image from "next/image";

// as a prop searchParams and params is a promise

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
    </>
  );
}
