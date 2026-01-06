"use client";
import React from 'react'
import { useEffect } from 'react'
function page() {
    useEffect(() => {
  const handleResize = () => {
    console.log(window.innerWidth);
  };

  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);
  return (
    <div>

    </div>
  )
}

export default page