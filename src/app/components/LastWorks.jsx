import Image from "next/image";

export default function LastWorks() {
    return (
        <div className="bg-color-2 py-10" id="lastWorks">
            <div className="container py-10 mx-auto">
                <h1 className="text-6xl">
                    {'{'}
                        <span className="text-[35px] font-desc px-5">
                            My last work{"'"}s
                        </span>
                    {'}'}
                </h1>           
            </div>     

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:px-0 md:px-2 px-5 gap-8">

                <div className="relative group rounded-full">
                    <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-inner group-hover:shadow-none transition-shadow duration-300">
                        <Image 
                            src="/portfolio/wiztytowka_hirion.webp" 
                            alt="Hirion.eu Website                               Project" 
                            layout="fill" 
                            objectFit="cover"
                            objectPosition="top"
                            className="rounded-lg transition-all duration-300 group-hover:brightness-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity duration-300"></div>
                    </div>
                    <div className="absolute bottom-0 left-0 m-2 rounded-xl right-0 bg-black bg-opacity-40 backdrop-blur-md px-5 py-2 flex justify-between items-center">
                    <div>
                        <h2 className="text-white text-md font-bold">Website for Hirion - Heat Pump Company</h2>
                        <p className="text-gray-300 text-[12px]">This card showing u company business card.</p>
                    </div>
                    <a
                        href="https://hirion.eu/"
                        target="_blank" 
                        className="button rounded-full text-sm"
                    >
                        View Project
                    </a>
                </div>

                </div>
                
                <div className="relative group rounded-full">
                    <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-inner group-hover:shadow-none transition-shadow duration-300">
                        <Image 
                            src="/portfolio/vuxe-header.png" 
                            alt="Hirion.eu Website                               Project" 
                            layout="fill" 
                            objectFit="cover"
                            className="rounded-lg transition-all duration-300 group-hover:brightness-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity duration-300"></div>
                    </div>
                    <div className="absolute bottom-0 left-0 m-2 rounded-xl right-0 bg-black bg-opacity-40 backdrop-blur-md px-5 py-2 flex justify-between items-center">
                    <div>
                        <h2 className="text-white text-md font-bold">Website for VUXE - Interactive Agency</h2>
                        <p className="text-gray-300 text-[12px]">This card showing u company business card.</p>
                    </div>
                    <button 
                        className="button rounded-full text-sm"
                        disabled
                    >
                        View Project
                    </button>
                </div>

                </div>

            </div>    

            <div className="container  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 mt-10 lg:px-0 md:px-2 px-5 gap-8">

                <div className="relative group rounded-full phone-hide">
                    <div className="relative h-[30vw] w-full overflow-hidden rounded-lg shadow-inner group-hover:shadow-none transition-shadow duration-300">
                        <Image 
                            src="/portfolio/crm-invoices.png" 
                            alt="Hirion.eu Website                               Project" 
                            layout="fill" 
                            objectFit="cover"
                            objectPosition="top"
                            className="rounded-lg transition-all duration-300 group-hover:brightness-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity duration-300"></div>
                    </div>
                    <div className="absolute bottom-0 left-0 m-2 rounded-xl right-0 bg-black bg-opacity-40 backdrop-blur-md px-5 py-2 flex justify-between items-center">
                    <div>
                        <h2 className="text-white text-md font-bold">Private CRM System for Private Company</h2>
                        <p className="text-gray-300 text-[12px]">The system is primarily intended to be used to issue contracts, invoices and handle the sales process and customers.</p>
                    </div>
                    <button
                        className="bg-red-500 border-red-500 border-[1px] px-5 py-2 text-white rounded-full text-sm"
                    >
                        Preview temporary unavailable
                    </button>
                </div>

                </div>


                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">

                <div className="relative group rounded-full">
                    <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-inner group-hover:shadow-none transition-shadow duration-300">
                        <Image 
                            src="/portfolio/zapiekanki-fullsize.png" 
                            alt="Hirion.eu Website                               Project" 
                            layout="fill" 
                            objectFit="cover"
                            objectPosition="top"
                            className="rounded-lg transition-all duration-300 group-hover:brightness-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity duration-300"></div>
                    </div>
                    <div className="absolute bottom-0 left-0 m-2 rounded-xl right-0 bg-black bg-opacity-40 backdrop-blur-md px-5 py-2 flex justify-between items-center">
                    <div>
                        <h2 className="text-white text-md font-bold">Project e-menu for Restaurant in Kraków</h2>
                        <p className="text-gray-300 text-[12px]">This card showing u e-Restaurant Menu</p>
                    </div>
                    <a
                        href="https://zapiekanki.ceti.pl"
                        target="_blank" 
                        className="button rounded-full text-sm"
                    >
                        View Project
                    </a>
                </div>

                </div>
                
                <div className="relative group rounded-full">
                    <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-inner group-hover:shadow-none transition-shadow duration-300">
                        <Image 
                            src="/portfolio/kancelaria-wizytowka.png" 
                            alt="Wizytówka kancelarii" 
                            layout="fill" 
                            objectFit="cover"
                            objectPosition="top"
                            className="rounded-lg transition-all duration-300 group-hover:brightness-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity duration-300"></div>
                    </div>
                    <div className="absolute bottom-0 left-0 m-2 rounded-xl right-0 bg-black bg-opacity-40 backdrop-blur-md px-5 py-2 flex justify-between items-center">
                    <div>
                        <h2 className="text-white text-md font-bold">Website for VUXE - Interactive Agency</h2>
                        <p className="text-gray-300 text-[12px]">This card showing u company business card.</p>
                    </div>
                    <a
                        className="button rounded-full text-sm"
                        href="https://kancelaria.clmgroup.pl/"
                        target="_blank"
                    >
                        View Project
                    </a>
                </div>

                </div>

                </div>

            </div>

        </div>
    );
}
