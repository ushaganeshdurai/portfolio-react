import React, { useEffect } from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

// const myref = useRef();
// const executeScroll=()=>{
//     myref.current.scrollIntoView({behaviour:"smooth"})
// }



    useEffect(() => {
        const toggleMenu = () => {
            const menu = document.querySelectorAll('.navbar-menu');
            for (let j = 0; j < menu.length; j++) {
                menu[j].classList.toggle('hidden');
            }
        };

        const burger = document.querySelectorAll('.navbar-burger');
        const close = document.querySelectorAll('.navbar-close');
        const backdrop = document.querySelectorAll('.navbar-backdrop');

        if (burger.length) {
            burger.forEach((item) => {
                item.addEventListener('click', toggleMenu);
            });
        }

        if (close.length) {
            close.forEach((item) => {
                item.addEventListener('click', toggleMenu);
            });
        }

        if (backdrop.length) {
            backdrop.forEach((item) => {
                item.addEventListener('click', toggleMenu);
            });
        }

        return () => {
            if (burger.length) {
                burger.forEach((item) => {
                    item.removeEventListener('click', toggleMenu);
                });
            }

            if (close.length) {
                close.forEach((item) => {
                    item.removeEventListener('click', toggleMenu);
                });
            }

            if (backdrop.length) {
                backdrop.forEach((item) => {
                    item.removeEventListener('click', toggleMenu);
                });
            }
        };
    }, []);

    return (
        <body className="bg-blue-500">
            <nav className="relative px-4 py-4 flex justify-between items-center bg-blue-950">
                <a className="text-3xl font-bold text-[#AA2531] leading-none" href="#">
                  <h1>UN</h1> 
                </a>
                <div className="lg:hidden">
                    <button className="navbar-burger flex items-center text-red-600 p-3">
                        <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Mobile menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                    </button>
                </div>
                <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
                    <li><a className="text-xl text-white hover:text-gray-500" href="#">Home</a></li>
                    <li><a className="text-xl text-white hover:text-gray-500" href="#">Resume</a></li>
                    <li><a className="text-xl text-white hover:text-gray-500" href="#">Contact me</a></li>
                    <li><a className="text-xl text-white hover:text-gray-500" > <Link to={"/about"}>About me</Link>  </a></li>
                </ul>
            </nav>
            <div className="navbar-menu relative z-50 hidden">
                <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
                <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
                    <div className="flex items-center mb-8">
                        <a className="mr-auto text-3xl font-bold text-[#862632] leading-none" href="#">
                            UN
                        </a>
                        <button className="navbar-close">
                            <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <div>
                        <ul>
                            <li className="mb-1">
                                <a className="block p-4 text-sm font-bold text-[#862632] hover:bg-[#862632] hover:text-white rounded" href="#">Home</a>
                            </li>
                            <li className="mb-1">
                                <a className="block p-4 text-sm font-bold text-[#862632] hover:bg-[#862632] hover:text-white rounded" > <Link to={"/about"}>About Me</Link> </a>
                            </li>
                            <li className="mb-1">
                                <a className="block p-4 text-sm font-bold text-[#862632] hover:bg-[#862632] hover:text-white rounded" href="#">Resume</a>
                            </li>
                            <li className="mb-1">
                                <a className="block p-4 text-sm font-bold text-[#862632] hover:bg-[#862632] hover:text-white rounded" href="#">Contact me</a>
                            </li>
                        </ul>
                    </div>

                </nav>
            </div>
        </body>
    );
}

export default Navbar;
