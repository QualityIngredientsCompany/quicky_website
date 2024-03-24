import React from 'react'
import Image from 'next/image';

interface propsType {
    img: string;
    title: string;
    mainTitle: string;
}

const Slide:React.FC<propsType> = ({img, title, mainTitle}) => {
  return (
    <div className="flex flex-1 justify-center items-center">
        <div className="self-center">
          <h3 className="text-accent text-[24px] lg:text-[28px]">
              {title}
          </h3>
          <h2 className="text-blackish text-[26px] md:text-[30px] lg:text-[44px] font-bold leading-[1.2]">
            {mainTitle}
          </h2>
        </div>
        <Image className="w-[50%] h-[300px] md:h-auto rounded-xl object-cover object-right md:object-left-bottom"
         src={img}
         alt="banner"
         width={2000}
         height={2000}
        />
    </div>

    
  );
};

export default Slide;