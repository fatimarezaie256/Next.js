"use client";

import { serverFunction } from "@/utils/secureKey";

function page() {
    const result = serverFunction();
  return (
    <div>
        <h1 className='text-3xl p-4 rounded-md shadow-md text-center'>client component {result}</h1>
    </div>
  )
}

export default page