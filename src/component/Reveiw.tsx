import React from 'react'

async function Reveiw() {
    await new Promise(resolve =>setTimeout(resolve,7000));
  return (
    <div className='p-10 bg-blue-700 text-center  text-white w-1/2 rounded-2xl'>
        <h1 className='text-2xl text-center font-bold'>This text is loaded about 7 seconds</h1>
    </div>
  )
}

export default Reveiw