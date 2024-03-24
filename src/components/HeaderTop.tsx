import React from 'react'
import Image from 'next/image';
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaI } from 'react-icons/fa6';
import { RiTwitterXFill } from "react-icons/ri";

const HeaderTop = () => {
  return (
    <div className="border-b border-gray-200 hidden sm:block">
        <div className="container py-0">
            <div className="flex justify-between items-center">
                <div className="text-red-600 w-20 gap-0">
                    <Image
                     src="/quicky-name-logo.png"
                     alt="logo"
                     width={400}
                     height={80}
                    />
                </div> 
                <div className="text-gray-500 text-[12px]">
                        <b>Nya Smaker Coming Soon!</b>
                </div>
                <div className="hidden lg:flex gap-1">
                    <div className="header_top__icon_wrapper">
                        <a href="https://www.instagram.com/quickyuf/">
                            <FaInstagram />
                        </a>
                    </div>
                    <div className="header_top__icon_wrapper">
                        <a href="https://www.tiktok.com/@quickyuf">
                            <FaTiktok />
                        </a>
                    </div>    
                </div>   
            </div> 
        </div>
    </div>

    
  )
}

export default HeaderTop;