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
]
function Navbar() {
  const pathname = usePathname();
    return (

    <div>
          <nav className="justify-between" style={{backgroundColor:"brown",color:"white",display:"flex",padding:"12px 6px"}}>
         {navlist.map(nav=>{
            const isActive = pathname === nav.url || (pathname.startsWith(nav.url) &&       nav.url !== "/");
          return(<Link className={isActive?"text-2xl font-bold ":""} key={nav.id} href={nav.url}>{nav.name}</Link>);
})}
        </nav>
    </div>
  )
}

export default Navbar