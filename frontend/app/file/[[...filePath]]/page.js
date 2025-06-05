// catchAll
// [...FilePath]  required catch all route  without file folder 
// [[...FilePath]]  optional catch all route 

export default async function FilePath({ params }) {
    const { filePath } = await params;
  return (
    <h1>Catch All paths: {filePath?.join("/")}</h1>
  )
}
