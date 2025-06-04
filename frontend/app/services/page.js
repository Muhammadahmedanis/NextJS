import Link from "next/link";
export default function Service() {
  return (
    <>
      <h1>All Services</h1>
      <p>
        <Link href='/'>App Developemnt</Link>
      </p>
      <p>
        <Link href='/services/web-dev'>Web Developemnt</Link>
      </p>
    </>
  );
}