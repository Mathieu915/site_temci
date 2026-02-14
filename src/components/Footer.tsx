import React, { FC } from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer: FC = () => {
    return (
        <footer className="border-t border-gray-200 py-6 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

                {/* Copyright + Mentions légales */}
                <div className="text-sm text-gray-700 flex items-center gap-3">
          <span>
            &copy; {new Date().getFullYear()} T.E.M.C.I
          </span>

                    <span className="text-black">•</span>

                    <Link
                        to="/mentions-legales"
                        className="hover:text-teal-700 underline underline-offset-2"
                    >
                        Mentions légales
                    </Link>
                </div>

                {/* Contact */}
                <div className="flex flex-col md:flex-row md:space-x-6 text-gray-700 text-sm items-center">
                    <a
                        href="tel:0164947536"
                        className="flex items-center gap-2 hover:text-teal-700"
                    >
                        {FaPhone({ size: 15, style: { transform: "scaleX(-1)" } })}
                        01 64 94 75 36
                    </a>

                    <a
                        href="mailto:sarl.temci@orange.fr"
                        className="flex items-center gap-2 hover:text-teal-700"
                    >
                        {FaEnvelope({ size: 15 })}
                        sarl.temci@orange.fr
                    </a>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
