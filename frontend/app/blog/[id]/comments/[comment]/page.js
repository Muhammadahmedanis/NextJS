export default async function Comment({ params }) {
    const paramsObj = await params;
    const { id, comment } = paramsObj;
    console.log(paramsObj);
    
    
  return (
    <div>Comment on: <i>{comment}</i> </div>
  )
}
