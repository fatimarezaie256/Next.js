"use client";
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const navlist:{id:number,name:string,url:string}[] = [
  {
    id:1,
    name:"Home",
    url:"/",
  },
  {
    id:2,
    name:"About",
    url:"/about",
  },
  {
    id:3,
    name:"Articles",
    url:"/articles",
  },
  {
    id:4,
    name:"Contact",
    url:"/contact",
  },
  {
    id:5,
    name:"Post",
    url:"/post",
  },
]
function Navbar() {
  const pathname = usePathname();
    return (

    <div>
          <nav className="justify-center items-center flex flex-row shadow-md p-6 gap-14 font-bold bg-stone-50/30 ">
         {navlist.map(nav=>{
            const isActive = pathname === nav.url || (pathname.startsWith(nav.url) &&       nav.url !== "/");
          return(<Link className={isActive?"text-2xl  font-black border-b-2  ":""} key={nav.id} href={nav.url}>{nav.name}</Link>);
})}
        </nav>
    </div>
  )
}

export default Navbar