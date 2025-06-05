"use client"

// route groups (marketing)

import { usePathname } from "next/navigation"

export default function blogNotfound() {
  const a = usePathname()
  return (
    <div>{a} id not-found</div>
  )
}