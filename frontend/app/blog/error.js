"use client"

import { useRouter } from "next/navigation"
import { startTransition } from "react"

export default function Error({ error, reset }) {
    const router = useRouter()
  return (
    <>
        <div>error</div>
        <p>{error?.message}</p>
        <button onClick={() => {
            startTransition(() => {  // this wait when error then show on page asynchoronusly work
                router.refresh(); // this send request to server 
                reset(); // this rerender our page  but work syncoronusly
            })
        }}>Try Again</button>
    </>
  )
}
