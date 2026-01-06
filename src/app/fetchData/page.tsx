"use client";   
import React, { useEffect, useState } from 'react'
type user ={
    name:string,
     email:string,
     phone:number,
     website:string,
}
function page() {
    const [list,setList] = useState<user[]>([]);
      const [loading,setLoading] = useState(true);
    useEffect(()=>{
        async function fetchData(){
            try{
              const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await response.json();
             setList(data);
             
            }
            catch(err){
                'some thing went wrong';
            }
            finally{
                setLoading(false);
            }
        }
        fetchData()
    },[])
if(loading){
    return <h1>Loading...</h1>
}
return(
    <div className=''>
        {list.map((user,index)=>(
            <div key={index} className='border rounded-md p-10'>
                <h1 className='text-center font-bold'>{user.name}</h1>
                <h1>{user.email}</h1>
                <h1>{user.phone}</h1>
                <h1>{user.website}</h1>
            </div>
        ))}
    </div>
)
}

export default page