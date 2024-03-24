import React from 'react'

const AboutUs = () => {
  return (
    <section id="aboutus">
        <div className="flex flex-wrap justify-evenly m-8">
            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <div className="mb-4">
                    <div className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Vad är Quicky
                    </div>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        fgfggfdgfdgfd
                    </p>
                </div>
            </div>  
            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <div className="mb-4">
                    <div className="text-gray-900 font-bold text-xl mb-2">
                        Om teamet
                    </div>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        bilder 
                        dfdsfsdfds
                    </p>
                </div>
            </div>
            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <div className="mb-4">
                    <div className="text-gray-900 font-bold text-xl mb-2">
                        Om Produkten
                    </div>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        fgfggfdgfdgfd
                    </p>
                </div>
            </div>   
        </div>
    </section>
  )
}

export default AboutUs;