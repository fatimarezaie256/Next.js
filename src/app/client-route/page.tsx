"use client";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from "next/image";

export default function ImageSLider(){
  const settings = {
    dots:true,
  };
  return(
    <div className="image-slider-container">
    <Slider {...settings}>
      <div>
        <Image src="/images/city.jpg" alt="some thing went wrong" height={1000} width={1000} className="rounded-md mt-42"/></div>
        <div><Image src="/images/fall.jpg" alt="some thing went wrong" height={1000} width={1000} className="rounded-md mt-42"/></div>
        <div><Image src="/images/heart.jpg" alt="some thing went wrong" height={1000} width={1000} className="rounded-md mt-42" /></div>
        <div><Image src="/images/login1.jpg" alt="some thing went wrong" height={1000} width={1000} className="rounded-md mt-42"/></div>
        <div><Image src="/images/mount.jpg" alt="some thing went wrong" height={1000} width={1000} className="rounded-md mt-42"/></div>
        <div><Image src="/images/sun.jpg" alt="some thing went wrong" height={1000} width={1000} className="rounded-md mt-42"/></div>
        <div><img src="/images/1.jpg" alt="" /></div>
     
    </Slider>
    </div>
  )
}