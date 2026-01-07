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
            <div key={index} className='shadow-md rounded-md p-10'>
                <table className='border'>
                    <tr>
                        <th className='px-4 py-2 border bg-black text-white text-center'>Id</th>
                        <th className='px-4 py-2 border bg-black text-white text-center'>Name</th>
                        <th className='px-4 py-2 border bg-black text-white text-center'>Email</th>
                        <th className='px-4 py-2 border bg-black text-white text-center'>Website</th>
                    </tr>
                    <tr>
                        <td className='px-4 py-2 border'>{user.name}</td>
                        <td className='px-4 py-2 border'>{user.email}</td>
                        <td className='px-4 py-2 border'>{user.phone}</td>
                        <td className='px-4 py-2 border'>{user.website}</td>
                    </tr>
                </table>
            </div>
        ))}
    </div>
)
}

export default page