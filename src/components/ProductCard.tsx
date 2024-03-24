'use client';
import React, { useState } from 'react';
import Image from 'next/image';

interface propsType {
    img: string;
    title: string;
    desc: string;
    inStock: boolean;
    price: string;
}

const ProductCard: React.FC<propsType> = ({img, title, desc, inStock, price}) => {
    const [modal, setModal] = useState(false);
    const handleImageClick = () => {
        setModal(!modal)
    };
  return (
    <div className="px-4 border border-gray-200 rounded-xl max-w-[400px]">
        <div>
            <button  onClick={handleImageClick}>
                <Image className="w-full h-auto" 
                src={img} 
                width={200}
                height={300}
                alt={title}      
                />  
            </button>      
        </div>
        <div className="space-y-2 py-2">
            <h2 className="text-accent font-medium uppercase">{title}</h2>
            <p className="text-gray-500 max-w-[150px]">{desc}</p>
            <div className="font-bold flex gap-4">
                {inStock ? (
                    <div>
                        {price}
                    </div>
                ) : (
                    <div>
                        <button className="custom-button" disabled>
                            Coming Soon
                        </button>
                    </div>
                )}
            </div>
        </div>
    </div>

    //modal


  )
}

export default ProductCard;