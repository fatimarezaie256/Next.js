import React from 'react'

async function Post() {
    await new Promise(resolve =>setTimeout(resolve,5000));
  return (
    <div className='bg-red-800 rounded-2xl p-10 w-1/2 font-bold text-center text-white'>
        <h1 className='text-2xl '>This text is loaded about 5 seconds</h1>
    </div>
  )
}

export default Post