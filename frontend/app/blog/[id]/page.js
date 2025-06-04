export default async function Blog({ params }) {
    const { id } = await params;
  return (
    <div>Blog: {id}</div>
  )
}
