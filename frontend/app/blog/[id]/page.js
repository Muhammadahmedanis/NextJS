import { notFound } from "next/navigation";

// for dynamic id
export async function generateMetadata({ params }) {
  const { id } = await params; 
  return {
    title: `blog ${id}`
  }
}


// For ISR
export const revlidate = 5;

// In ISR there is possibility that i want to generate my content again after some duration due  to new data update so we use revalidate this for  production but in run time it will generate dynamicallly at every load in production first data come on server then after load page show on browser 
//   so our static site regenrate due ISR because revalidate = 5 etc. ISR work only when SSG we do 

//  for static site generation SSR

export const dynamicParams = false;
export async function generateStaticParams() {
  // const response = await fetch() 
  // const data = await response.json();
  // return data?.map()
}


export default async function Blog({ params }) {
  const { id } = await params;

  // const response = await fetch(, { next: { revalidate: 5 }}); 
  // const data = await response.json();
  // return data?.map()

  if (!/^\d+s$/.test(id)) {
    notFound();
  }
  return (
    <div>Blog: {id}</div>
  )
}
