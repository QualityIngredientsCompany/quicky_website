import Link from 'next/link';
import React from 'react'
import HeaderTop from './HeaderTop';
import AboutUs from './AboutUs';
import Products from './Products';
import Footer from './Footer';


const Navbar = () => {
  return (

    <div className="hidden lg:block">
        <div className="container">
            <div className="flex w-fit gap-10 mx-auto font-medium py-6 text-blackish">
                <Link className="navbar__link relative" href="#header">
                    HOME
                </Link>
                <Link className="navbar__link relative" href="#aboutus">
                    ABOUT US
                </Link>
                <Link className="navbar__link relative" href="#products">
                    PRODUCTS
                </Link>
                <Link className="navbar__link relative" href="#footer">
                    CONTACT US
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar;