import Loder from '@/component/Loder'
import Post from '@/component/Post'
import Reveiw from '@/component/Reveiw'
import React, { Suspense } from 'react'

function page() {
  return (
    <div className='flex flex-col items-center justify-center h-screen w-full'>
    <div className='border rounded-2xl p-10 w-1/2 bg-green-700 text-white '>
        <h1 className='font-bold text-center '>Welcome to this route</h1>
    </div>
    <Suspense fallback={<Loder/>}>
        <Post/>
    </Suspense>
 <Suspense fallback={<Loder/>}>
    <Reveiw/>
 </Suspense>
  {/* <Loder/> */}
    </div>
  )
}

export default page