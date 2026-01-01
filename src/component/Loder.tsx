import React from 'react'

function Loder() {
  return (
    <div className='flex flex-col justify-center items-center'>
    <div className='h-10 w-10 rounded-full border-2 animate-spin border-dashed'></div>
    <h3 className='font-bold'>Please wait a moment...</h3>
    </div>
  )
}

export default Loder