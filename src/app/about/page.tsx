import { resolve } from 'path'
import React from 'react'
export const metadata = {
    title:"About",
}
async function page() {
  await new Promise ((resolve=>{
    setTimeout(()=>{
        resolve("wait amdi");
    },6000)
  }));
    return (
    <div>
        <h1 className='text-center text-2xl font-bold'>Hi this is about us page</h1>
    </div>
  )
}

export default page