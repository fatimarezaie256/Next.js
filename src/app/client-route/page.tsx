"use client";

import { serverFunction } from "@/utils/secureKey";

function page() {
    // const result = serverFunction();
  return (
    <div>
        <h1 className='text-3xl p-4 rounded-md shadow-md text-center m-10 bg-amber-700 text-white'>client components</h1>
    </div>
  )
}

export default page