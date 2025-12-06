import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div>
        <h1 className='text-3xl font-bold'>All posts</h1>
        <Link href="/post/1?lang=en">Post in English</Link>
        <Link href="/post/1?lang=fa">Post in Persian</Link>
       
    </div>
  )
}

export default page