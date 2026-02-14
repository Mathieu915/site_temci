import React, { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/img/logo.png";
import {FaEnvelope, FaFacebookF, FaInstagram, FaPhone} from "react-icons/fa";

const Navbar: FC = () => {
    const location = useLocation(); // récupère le chemin actuel
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

            if (isMenuOpen) setIsMenuOpen(false);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY, isMenuOpen]);

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    const isLinkActive = (path: string) => (location.pathname === path ? "active" : "");

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-transform duration-300 ${
                isVisible ? "translate-y-0" : "-translate-y-full"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 h-24 flex items-center justify-between">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <a href="/" className="cursor-pointer">
                        <img src={logo} alt="Logo" className="h-20 w-auto" />
                    </a>
                </div>

                {/* Menu Desktop */}
                <div className="hidden md:flex flex-1 justify-center">
                    <div className="flex space-x-14">
                        <a href="/materiel" className={`link-underline cursor-pointer ${isLinkActive("/materiel")}`}>Matériel</a>
                        <a href="/prestations" className={`link-underline cursor-pointer ${isLinkActive("/prestations")}`}>Nos Prestations</a>
                        <a href="/qualifications" className={`link-underline cursor-pointer ${isLinkActive("/qualifications")}`}>Qualifications</a>
                        <a href="/realisations" className={`link-underline cursor-pointer ${isLinkActive("/realisations")}`}>Nos Réalisations</a>
                        <a href="/contact" className={`link-underline cursor-pointer ${isLinkActive("/contact")}`}>Contact</a>
                    </div>
                </div>

                {/* Boutons Desktop */}
                <div className="hidden md:flex items-center gap-8">

                    <div className="hidden md:flex flex-col items-start gap-2 text-gray-700 text-sm">
                        <a href="tel:0164947536" className="flex items-center gap-2 hover:text-teal-700">
                            {FaPhone({ size: 15, style: { transform: 'scaleX(-1)' } })} 01 64 94 75 36
                        </a>
                        <a href="mailto:sarl.temci@orange.fr" className="flex items-center gap-2 hover:text-teal-700">
                            {FaEnvelope({ size: 15 })} sarl.temci@orange.fr
                        </a>
                    </div>
                    <a
                        href="/contact"
                        className="flex justify-center items-center px-4 py-1 font-semibold border border-[#b00000] bg-[#b00000] rounded-xl text-white hover:bg-white hover:text-[#b00000] transition-colors duration-300 cursor-pointer link-chevron"
                    >
                        Devis gratuit
                    </a>

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
                        href="/materiel"
                        className={`block ${isLinkActive("/materiel")}`}
                    >
                        Matériel
                    </a>
                    <a
                        href="/prestations"
                        className={`block ${isLinkActive("/prestations")}`}
                    >
                        Nos Prestations
                    </a>
                    <a
                        href="/qualifications"
                        className={`block ${isLinkActive("/qualifications")}`}
                    >
                        Qualifications
                    </a>
                    <a
                        href="/realisations"
                        className={`block ${isLinkActive("/realisations")}`}
                    >
                        Nos Réalisations
                    </a>
                    <a
                        href="/contact"
                        className={`block ${isLinkActive("/realisations")}`}
                    >
                        Contact
                    </a>
                    <a
                        href="/contact"
                        className={`flex justify-center items-center px-4 py-1 font-semibold border border-[#b00000] bg-[#b00000] rounded-xl text-white hover:bg-white hover:text-[#b00000] transition-colors duration-300 cursor-pointer link-chevron`}
                    >
                        Devis gratuit
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
