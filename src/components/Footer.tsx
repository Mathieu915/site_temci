import React, { FC } from "react"
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer: FC = () => {
    return (
        <footer className="border-t border-gray-20000 py-6">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
                {/* Copyright */}
                <div className="text-sm">
                    &copy; {new Date().getFullYear()} T.E.M.C.I
                </div>



            </div>
        </footer>
    )
}

export default Footer