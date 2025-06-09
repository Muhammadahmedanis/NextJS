"use client"
// for clientSide rendering error
export default function Error({ error, reset }) {
  return (
    <>
        <div>error</div>
        <p>{error?.message}</p>
        <button onClick={() => {
            reset(); // this rerender our page  but work syncoronusly
        }}>Try Again</button>
    </>
  )
}
