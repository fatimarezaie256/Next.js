import React from 'react'

async function page({params}:{params:Promise<{articleid:string}>}) {
  const articaleid = (await params).articleid;
    return (
    <div>
        <h1>the article number is {articaleid}</h1>
    </div>
  )
}

export default page