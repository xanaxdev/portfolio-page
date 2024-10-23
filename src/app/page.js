import Navbar from "./components/Navbar";
import PromoServices from "@/app/page_content/PromoServices";
import AnimatedTextOnScroll from "@/app/page_content/AnimatedTextOnScroll";
import LastWorks from "./components/LastWorks";
import MySkills from "./components/MySkills";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
    return (
        <div className="flex flex-col justify-center min-h-screen">

            <Navbar/>

            <div className="container mx-auto flex flex-col py-20 lg:py-[15vh]">
                <h1 className=" text-6xl lg:text-[120px] md:text-[200px] font-extrabold leading-none text-center lg:text-left">
                    Hello!
                </h1>

                <h1 className="text-6xl lg:max-text-[120px] md:text-[200px] font-extrabold leading-none text-center lg:text-right">
                    I{"'"}m Kacper.
                </h1>

                <p className="text-center lg:text-left lg:text-lg muted mt-4">
                    I{"'"}m the Poland Fullstack Developer 🧑‍💻
                </p>

                <div className="w-full flex justify-center lg:justify-end mt-10">
                    <button className="button rounded-full text-xl flex items-center">
                        CLICK ME
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6 ml-2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="container lg:px-0 px-10 mx-auto">
                <hr className="opacity-10"/>
            </div>

            <div className="container mx-auto py-10">
                <div className="mt-10 mb-10 text-center lg:text-left">
                    <h1 className="text-6xl">
                        {'{'}
                        <span className="text-[35px] font-desc px-5">
                            Who am i?
                          </span>
                        {'}'}
                    </h1>

                    <div className="mt-10">
                        <p className="text-5xl md:text-6xl description   mx-auto leading-relaxed">
                            I am a <strong>dude</strong> who dreams of becoming more than just a pushover. I want to
                            create, to be loved, and to love. I want to develop my passion as much as I can! And it{"'"}s
                            all thanks to you, the people – it{"'"}s only thanks to you that I am where I am 😢
                        </p>
                    </div>
                </div>

            </div>

            <div className="container mx-auto mt-10">
                <hr className="opacity-10"/>
            </div>

            <PromoServices />

            <AnimatedTextOnScroll />

            <LastWorks />

            <div className="mt-10 mb-10">
                <div className="container mx-auto">
                    <hr className="opacity-10" />
                </div>
            </div>

            <MySkills />


            <div className="mt-10 mb-10">
                <div className="container mx-auto">
                    <hr className="opacity-10" />
                </div>
            </div>


            <ContactForm />

            <div className="mt-10 mb-10">
                <div className="container mx-auto">
                    <hr className="opacity-10" />
                </div>
            </div>

            <Footer />
        </div>
    );
}
