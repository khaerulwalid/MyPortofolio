import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

export default function HeroSection() {
    return (
        <section id="home" className=" pt-36">
            <div className="container">
                <div className="flex flex-wrap px-6">
                    <div className="w-full self-center">
                        <div className="w-fit">
                        <h1 className="animate-typing overflow-hidden whitespace-nowrap font-semibold text-secondary text-4xl pr-2 inline-block border-r-2 border-e-black lg:text-6xl">Hi! I'm <span className="text-primary">Wall Id</span></h1>
                        </div>
                        <h2 className="font-medium text-slate-500 text-base -mt-2 mb-5 pr-4 lg:text-xl">Content creator | Frontend developer</h2>
                        <p className="font-medium text-secondary mb-10 leading-relaxed pr-4">Having a strong interest in the development of information technology in the field of web programming,
more specifically frontend and backend developers. I am an Information Systems graduate who continues to learn and develop
myself to become a professional in the field of web programming.</p>

                        <div className="flex sm:justify-center px-4">
                            <div className="flex max-w-none flex-wrap items-center gap-3">
                                <a href="https://www.linkedin.com/in/m-khaerul-walid-qutbi-a31b234b" target="_blank" className=" cursor-pointer text-lg font-semibold text-white bg-linkedin hover:opacity-90 py-3 px-8 rounded-md transition duration-300 ease-in-out"><FaLinkedin className="inline-block mr-2 " />Connect</a>

                                <a href="https://wa.me/087819091921" target="_blank" className=" cursor-pointer text-lg font-semibold text-white bg-whatsapp hover:opacity-90 py-3 px-8 rounded-md transition duration-300 ease-in-out"><IoLogoWhatsapp className="inline-block mr-2 " />Chat</a>

                                <a href="https://github.com/khaerulwalid" target="_blank" className=" cursor-pointer text-lg font-semibold text-white bg-github hover:opacity-90 py-3 px-8 rounded-md transition duration-300 ease-in-out"><FaGithub className="inline-block mr-2" />Follow</a>
                            </div>
                            
                        </div>

                        
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center -mt-4">
                    <div className="lg:px-6 w-[100%] lg:w-[90%] h-[250px] bg-slate-900 mx-auto mt-16 rounded-lg bg-no-repeat bg-cover bg-top bg-[url('./assets/wall.jpg')]"></div>

                    <h2 className="px-6 font-medium text-secondary text-base mt-2 mb-5">📮 Content creator | Fullstack Web developer | Frontend Developer | Backend Developer 👩‍💻</h2>
                </div>
            </div>
        </section>
    )
}