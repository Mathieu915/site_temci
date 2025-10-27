import React, { FC } from "react"
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer: FC = () => {
    return (
        <footer className="border-t border-gray-20000 py-6">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                {/* Copyright */}
                <div className="text-sm">
                    &copy; {new Date().getFullYear()} T.E.M.C.I
                </div>

                {/* Réseaux sociaux */}
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
        </footer>
    )
}

export default Footer