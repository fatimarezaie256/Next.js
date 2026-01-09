"use client";
import React from "react";
import { useEffect } from "react";
function page() {
  useEffect(() => {
    const handleResize = () => {
      <h1>(window.innerWidth);</h1>;
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return <div></div>;
}

export default page;
