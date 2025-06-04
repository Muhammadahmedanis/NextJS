export default async function Comments({ params }) {
    const { id } = await params;
    console.log(id);
    
  return (
    <div>Comments: {id}</div>
  )
}
