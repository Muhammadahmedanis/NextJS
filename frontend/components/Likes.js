// export default async function Likes() {
//   await new Promise((resolve) => setTimeout(resolve, 2000))
//   return (
//     <div>2K Like</div>
//   )
// }


"use client"

import { useState } from "react";

export default function Likes() {
  const[likeCount, setLikeCount] = useState(0);

  console.log(localStorage); // show error on server but below not show 
  if(typeof localStorage !== "undefined"){
    console.log(localStorage);
  }

  return (
    <>
      <div onClick={() => console.log("click") }> 2K Likes </div> // it will excute on server but Next JS ignore this
      <div onClick={() => console.log("click") }> 2K Likes {console.log("running") } </div>  // it will run on server on client  but show undefined on browser  because console value return undefined and react doesnot show undefined value on brwoser
      <div onClick={prev => prev + 1}>2 {likeCount}</div> 
    </>
  )
}

// client component ka code server asetise bhj dia jata ha client ko but server ka nhi bhja jata ha  dev mode ma sub ko kuch jata ha for debugging purpose we want to make those componenet client where 
// we want interactivity and functionality not make complete componenet client because of production 
// hydration is a process of adding interactivity in pre-render html pages  server se jo code bhj ha wo client se match karega agar ok ha to no hydration error else hydration error 
// Hydration error when we modified DOM this is only on dev mode not in production 


export default function comment() {
  if(typeof window === "undefined"){
    return <div>500 comments server</div>
  }
  return <div>500 comments client</div>  // cause hydration error  compare server componenet code and client component in js file  server se different value aati ha jo browser html show karke dekhata ha then js us ko change karta ha 
}