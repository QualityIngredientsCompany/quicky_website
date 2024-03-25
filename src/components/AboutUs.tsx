import React from 'react'

const AboutUs = () => {
  return (
    <section id="aboutus">
        <div className="flex flex-wrap justify-evenly m-8 ">
            <div className="block max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <div className="mb-4">
                    <div className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Vad är Quicky
                    </div>
                    <p className="font-normal text-gray-700 dark:text-gray-400 text-xl">
                    Quicky är ett företag som riktar in sig på
personer som vill kunna prestera inom sport.
Quicky är en sockerfri energidryck som är 
perfekt för träning och de som behöver extra energi.
                    </p>
                </div>
            </div>  
            <div className="block max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <div className="mb-4">
                    <div className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Vad gör Quicky?
                    </div>
                    <p className="font-normal text-gray-700 dark:text-gray-400 text-xl">
                    Quicky är ett företag som riktar in sig på 
idrott i utsatta områden. 
Genom att arbeta med idrottsorganisationer som AIK 
bygger vi vårt företag, och främjar om idrott 
i utsatta områden.
                    </p>
                </div>
            </div> 
            <div className="text-center hidden lg:block md:block w-full mx-20 mt-10 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <div className="mb-4">
                    <div className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Vilka är Quicky?
                    </div>
                    <div className="text-center font-normal text-gray-700 dark:text-gray-400 text-xl mt-6">
                        <p className="inline ml-8">
                            Yousef Badaan | VD
                        </p>
                        <p className="inline ml-8">
                            Zacharias Alemdar | Ansvarig för Marknadsföring
                        </p>
                        <p className="inline ml-8">
                            Konstantin Dimitriadis Lorenz | IT & Ekonomiansvarig           
                        </p>
                        <p className="inline ml-8">
                            Joey Svejd | Designansvarig       
                        </p>
                    </div>

                </div>
            </div>      
        </div>
    </section>
  )
}

export default AboutUs;