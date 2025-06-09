// Next JS provice this build infile and this file run only in production not in dev mode
"use client"

export default function Error({ error }) {
  return (
    <html lang="en">
        <body>
            <div>error</div>
            <p>{error?.message}</p>
            <button onClick={() => {
                window.location.reload()
            }}>Try Again</button>
        </body>
    </html>
  )
}
