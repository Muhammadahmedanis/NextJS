"use client"

// client side exception and cause redering on Client

import { useState } from "react"
export default function page() {
    const[fruit, setFruit] = useState(['Mango, Apple'])
  return (
    <div>
        <p>Fruits</p>
        <button onClick={() => setFruit(null)}>Click Me</button>
        {
            fruit?.map((val, id) => (
                <li key={id}>{val}</li>
            ))
        }
    </div>
  )
}
