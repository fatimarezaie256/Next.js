import React from 'react'

async function page({params,searchParams}:{params:Promise<{postid:string}>;searchParams:Promise<{lang?:string}>}) {
  const {postid} = await params;
  const {lang = "en"} = await searchParams 
   if(lang==="en"){
    return(
        <div><h1>This is post {postid}</h1></div>
    )
   }
   else{
    return(
        <div>
            <h1>you are reading this post in {lang} language</h1>
        </div>
    )
   }
   
  
}

export default page