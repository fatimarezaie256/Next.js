import Link from 'next/link'
import React from 'react'
export const metadata = {
    title:"Articles",
}
function page() {
  return (
    <div>
        <h1>This is articles page</h1>
        <Link href="/articles/1" className='border p-6 '>article one</Link>
        <Link href="/articles/2" className='border p-6 '>article two</Link>
        <Link href="/articles/3" className='border p-6 '>article three</Link>
        <Link href="/articles/4" className='border p-6 '>article four</Link>
        <Link href="/articles/5" className='border p-6 '>article fife</Link>
    </div>
  )
}

export default page