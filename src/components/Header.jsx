import { Link } from "react-router-dom";
import wallidlogo from "../assets/wallidlogo.png"
import { useState } from "react";

export default function Header() {
    const [toggle, setToggle] = useState(false)
    const [header, setHeader] = useState(false)

    const showHeader = () => {
        const header = document.querySelector("header")
        const fixedNav = header.offsetTop
        if(window.pageYOffset > fixedNav) {
            setHeader(true)
        } else if (window.pageYOffset === fixedNav) {
            setHeader(false)
        }
    }

    window.addEventListener("scroll", showHeader)

    return (
        <header id="header" className={`bg-transparent top-0 left-0 w-full flex items-center z-10 ${header ? 'navbar-fixed' : 'absolute'}`}>
        <div className="container">
            <div className="flex items-center justify-between relative">
                <div className="px-4 py-6">
                    <a href="#home" className="font-bold text-2xl text-secondary"><img src={wallidlogo} alt="logo" className=" inline-block w-4" /> wall Id</a>
                </div>
                <div className="flex items-center px-4">
                    <button onClick={() => setToggle(!toggle)} id="hamburger" name="hamburger" type="button" className={`block absolute right-4 lg:hidden ${toggle ? 'hamburger-active' : ''}`}>
                        <span className="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
                        <span className="hamburger-line transition duration-300 ease-in-out"></span>
                        <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
                    </button>

                    <nav id="nav-menu" className={`absolute py-5 bg-slate-200 shadow-lg  w-full left-0 top-12 transition duration-300 ease-in-out bg-opacity-95 lg:block lg:static lg:py-0 lg:bg-transparent lg:shadow-none ${!toggle ? 'hidden' : ''}`}>
                        <ul className="lg:flex">
                            <li className="p-2 bg-[#d3d9dc] lg:bg-transparent lg:bg-opacity-95 m-2 rounded-md">
                                <a href="#About" className="hover:text-slate-400">About</a>
                            </li>
                            <li className="p-2 bg-[#d3d9dc] lg:bg-transparent lg:bg-opacity-95 m-2 rounded-md">
                                <a href="#About" className="hover:text-slate-400">Contact</a>
                            </li>
                            <li className="p-2 bg-[#d3d9dc] lg:bg-transparent lg:bg-opacity-95 m-2 rounded-md">
                                <a href="#About" className="hover:text-slate-400">Blog</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
    )
}