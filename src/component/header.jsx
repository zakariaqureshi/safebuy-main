import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo.jpg';
import menu from '../assets/menu.png';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const menuRef = useRef(null);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };




    return (
        <>
            <header className="bg-gray-100">
                <nav className="border-gray-200 px-4 lg:px-6 py-2.5">
                    <div className="flex justify-between items-center bg-gray-200 py-2 px-4 text-sm text-gray-700">
                        <div>
                            <span>📧 info@unihopekuwait.com</span>
                        </div>
                        <div>
                            <span>📞 +965 22440417</span>
                        </div>
                    </div>

                    {/* Logo Section */}
                    <div className="flex items-center justify-between mt-5">
                        <Link to="/home" className="flex items-center lg:ml-10">
                            <img
                                src={logo}
                                className="mr-5 h-12 rounded-full shadow-2xl"
                                alt="Logo"
                            />
                            <h1 className="text-2xl font-bold text-green-700">Safetronics</h1>
                        </Link>

                        {/* Menu Icon for Small Screens */}
                        <button
                            onClick={toggleMenu}
                            className="lg:hidden p-2 text-gray-700"
                        >
                            <img src={menu} alt="Menu" className="h-8 w-8" />
                        </button>

                        {/* Navigation Links */}
                        <ul
                            className={`flex-col lg:mr-20 lg:flex-row lg:flex lg:items-center space-y-2 lg:space-y-0 lg:space-x-6 lg:ml-10 absolute lg:static bg-gray-100 lg:bg-transparent w-full lg:w-auto left-0 lg:ml-0 transition-all duration-300 ${isMenuOpen ? 'flex' : 'hidden'}`}
                        >
                            <li>
                                <NavLink
                                    onClick={handleLinkClick}
                                    to='/home'
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-blue-700' : 'text-gray-700'
                                        } border-b border-gray-100 lg:border-0 lg:p-0 hover:bg-white lg:hover:bg-transparent hover:text-white`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    onClick={handleLinkClick}
                                    to='/about'
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-softblue-700' : 'text-gray-700'
                                        } border-b border-gray-100 lg:border-0 lg:p-0 hover:bg-white lg:hover:bg-transparent hover:text-white`
                                    }
                                >
                                    About Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    onClick={handleLinkClick}
                                    to='/services'
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-softblue-700' : 'text-gray-700'
                                        } border-b border-gray-100 lg:border-0 lg:p-0 hover:bg-white lg:hover:bg-transparent hover:text-white`
                                    }
                                >
                                    Our Services
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    onClick={handleLinkClick}
                                    to='/partners'
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-softblue-700' : 'text-gray-700'
                                        } border-b border-gray-100 lg:border-0 lg:p-0 hover:bg-white lg:hover:bg-transparent hover:text-white`
                                    }
                                >
                                    Our Partners
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    onClick={handleLinkClick}
                                    to='/contact'
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-softblue-700' : 'text-gray-700'
                                        } border-b border-gray-100 lg:border-0 lg:p-0 hover:bg-white lg:hover:bg-transparent hover:text-white`
                                    }
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
}
