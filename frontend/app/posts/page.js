//  client side rendering component
"use client"

import { useEffect, useState } from "react"
export default function page() {
    const[post, setPost] = useState([]);

    useEffect(() => {
        async function fetchPost() {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
            const data = await response.json();
            setPost(data);
            console.log(data);
        }
        fetchPost();
    }, [])

  return (
    <>
        <div>Post Page</div>
        <div>
            {post?.map(({ id, title, body }) => (
                <div className=""></div>
            ))}
        </div>
    </>
  )
}

// backend se jo html ka response aaiga wo sirf div aaiga baqi sab content client se data fetch karke populate kia ha 


// Server component  rendering the code not go on client 

const posts = async () => {
    const response = await fetch();
    const todos = await response.json();
    console.log(todos);

    const slowResponse = await fetch("https://procodrr.vercel.app/?sleep=2000");
    const data = await slowResponse.json();
    console.log(data);
    
    return (
        <>
            <h1></h1>
            <div>

            </div>
        </>
    )
}

// in fetch of next js it has some own feature fnunctionality 