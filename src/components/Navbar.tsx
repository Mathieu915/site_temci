import React, { FC, useEffect, useState } from "react";
import logo from "../assets/img/logo_noir.png";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Navbar: FC = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollY(currentScrollY);

            // Fermer le menu mobile au scroll
            if (isMenuOpen) setIsMenuOpen(false);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY, isMenuOpen]);

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-transform duration-300 ${
                isVisible ? "translate-y-0" : "-translate-y-full"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 h-24 flex items-center justify-between">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <a
                        href="#header"
                        className="link-underline cursor-pointer"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection("header");
                            setIsMenuOpen(false);
                        }}
                    >
                        <img src={logo} alt="Logo" className="h-20 w-auto" />
                    </a>
                </div>

                {/* Menu Desktop */}
                <div className="hidden md:flex flex-1 justify-center">
                    <div className="flex space-x-20">
                        <a
                            href="#presentation"
                            className="link-underline cursor-pointer"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection("presentation");
                            }}
                        >
                            Présentation
                        </a>
                        <a
                            href="#presentationPerso"
                            className="link-underline cursor-pointer"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection("presentationPerso");
                            }}
                        >
                            Me connaître
                        </a>
                        <a
                            href="#services"
                            className="link-underline cursor-pointer"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection("services");
                            }}
                        >
                            Mes services
                        </a>
                    </div>
                </div>

                {/* Boutons Desktop */}
                <div className="hidden md:flex items-center gap-8">
                    <a
                        href="#contact"
                        className="px-4 py-2 border border-black rounded-md text-black hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection("contact");
                        }}
                    >
                        Contactez-moi
                    </a>
                    <div className="flex space-x-8">
                        <a
                            href="https://www.facebook.com/share/1CUDV9tbBx/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-600 transition-colors duration-300"
                        >
                            {FaFacebookF({ size: 20 })}
                        </a>
                        <a
                            href="https://www.instagram.com/ludo_educateur_canin"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-pink-500 transition-colors duration-300"
                        >
                            {FaInstagram({ size: 20 })}
                        </a>
                    </div>
                </div>

                {/* Burger mobile */}
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={
                                    isMenuOpen
                                        ? "M6 18L18 6M6 6l12 12" // croix
                                        : "M4 6h16M4 12h16M4 18h16" // burger
                                }
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Menu Mobile */}
            {isMenuOpen && (
                <div className="md:hidden bg-white px-4 pt-4 pb-6 space-y-4 shadow-md">
                    <a
                        href="#presentation"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection("presentation");
                            setIsMenuOpen(false);
                        }}
                        className="block"
                    >
                        Présentation
                    </a>
                    <a
                        href="#presentationPerso"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection("presentationPerso");
                            setIsMenuOpen(false);
                        }}
                        className="block"
                    >
                        Me connaître
                    </a>
                    <a
                        href="#services"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection("services");
                            setIsMenuOpen(false);
                        }}
                        className="block"
                    >
                        Mes services
                    </a>
                    <a
                        href="#contact"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection("contact");
                            setIsMenuOpen(false);
                        }}
                        className="block mt-4 px-4 py-2 border border-black text-center rounded-md text-black hover:bg-black hover:text-white transition-colors duration-300"
                    >
                        Contactez-moi
                    </a>
                    <div className="flex w-full justify-center space-x-6 pt-4">
                        <a
                            href="https://www.facebook.com/share/1CUDV9tbBx/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-600"
                        >
                            {FaFacebookF({ size: 20 })}
                        </a>
                        <a
                            href="https://www.instagram.com/ludo_educateur_canin"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-pink-500"
                        >
                            {FaInstagram({ size: 20 })}
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
