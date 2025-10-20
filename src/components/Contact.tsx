import React, {FC, useState} from "react"
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import emailjs from '@emailjs/browser';
import logo from "../assets/img/logo_noir.png";
import { FaPhone } from "react-icons/fa";


const Contact: FC = () => {


    const [formData, setFormData] = useState({
        firstname: "",
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e:any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlePhoneChange = (value:any) => {
        setFormData({ ...formData, phone: value });
    };

    const handleSubmit = (e:any) => {
        e.preventDefault();

        const serviceID = 'service_71j1z3x';
        const templateID = 'template_joeg72n';
        const publicKey = '29iSV3WS995yT1fv4';

        const templateParams = {
            firstname: formData.firstname,
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
        };

        emailjs.send(serviceID, templateID, templateParams, publicKey)
            .then((response) => {
                
                // Optionnel : reset du formulaire
                setFormData({
                    firstname: "",
                    name: "",
                    email: "",
                    phone: "",
                    message: "",
                });
            }, (err) => {

            });
    };

    return (
        <div className="bg-[#e6d5b9]">
            <div id="contact" className="container py-12 grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="px-8 py-8 rounded-xl bg-[#dec499] flex flex-col gap-6">
                    <h2 className=" text-3xl lg:text-4xl font-semibold">Contactez-moi !</h2>
                    <span className="text-lg">
                        J'interviens en Île-de-France, pour plus d'informations n'hésitez pas à me contacter.
                    </span>
                    <div className="flex gap-4 items-center text-xl font-bold">
                        {FaPhone({ style: { transform: 'scaleX(-1)' } })}
                        <a href="tel:0681745681" className="phone-link">
                            06 81 74 56 81
                        </a>
                    </div>
                    <img src={logo} alt="Logo" className="h-40 w-auto mx-auto" />
                    <div className="flex flex-col gap-6">
                        <h3 className="text-xl font-semibold">Suivez-moi sur les réseaux !</h3>
                        <span className="font-serif font-semibold text-xl">
                            Instagram : <a className="font-normal" href="https://www.instagram.com/ludo_educateur_canin?igsh=MW55YzU5bGFsaW9sbw==">Ludovic Clavié - Éducateur Comportementaliste Canin</a>
                        </span>
                        <span className="font-serif font-semibold text-xl">
                            Facebook : <a className="font-normal" href="https://www.facebook.com/share/1CUDV9tbBx/">Ludovic Clavié</a>
                        </span>
                    </div>
                </div>
                <div className="md:col-span-2 md:w-3/4">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium">Prénom</label>
                            <input
                                type="text"
                                name="firstname"
                                value={formData.firstname}
                                onChange={handleChange}
                                required
                                className="mt-1 w-full border border-gray-300 rounded px-3 py-2 !bg-white"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Nom</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Téléphone</label>
                            <PhoneInput
                                international
                                defaultCountry="FR"
                                value={formData.phone}
                                onChange={handlePhoneChange}
                                placeholder="Entrez votre numéro"
                                className="PhoneInput mt-1"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Message</label>
                            <textarea
                                name="message"
                                rows={6}
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#dec499] py-2 px-4 rounded hover:bg-[#e8d59b]"
                        >
                            Envoyer
                        </button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Contact