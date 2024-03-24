"use client";

import React from 'react'
import Slider from "react-slick";
import Slide from './Slide';
import Image from 'next/image';

const Hero = () => {

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        pauseOnHover: false,
    };

    const slideData = [
        {
            id: 0,
            img: "/quicky-1.png",
            title: "Ny Smak",
            mainTitle: "Quicky Mango",
        },
        {
            id: 1,
            img: "/quicky-2.png",
            title: "Mango Smak",
            mainTitle: "Ute Nu",
        },
        {
            id: 2,
            img: "/quicky-3.png",
            title: "Köp Nu",
            mainTitle: "Quicky",
        },
    ]

  return (
    <section id="hero">
        <div className="w-full h-full rounded-3xl overflow-hidden relative">
            <Image className="w-full h-full object-cover object-center background-image" 
                src="/quicky-bg-1.png"
                alt="background"
                width={1920}
                height={1080}

                />
            <div className="container pt-6 lg:pt-0">         
                <Slider {...settings}>
                    {slideData.map((item) => 
                    <Slide 
                    key={item.id}
                    img={item.img}
                    title={item.title}
                    mainTitle={item.mainTitle}
                    />
                    )}
                </Slider>
            </div>
        </div>
    </section>
  )
}

export default Hero