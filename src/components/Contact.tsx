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
        <div className="">
            <div id="contact" className="container py-12 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                <div className="px-4 lg:pl-0 lg:pr-12 rounded-xl flex flex-col gap-6">
                    <h2 className="text-xl lg:text-2xl text-[#017F7F] font-semibold">Pourquoi choisir notre société TEMCI :</h2>
                    <ul className="text-lg lg:text-xl list-disc list-outside ml-4">
                        <li className="mb-2"><strong>Plus de 25 ans d'expérience</strong> dans le domaine des pompes à chaleur et de la climatisation</li>
                        <li className="mb-2"><strong>Installation sur mesure,</strong> adaptée à vos besoins, à votre logement ou local professionnel</li>
                        <li className="mb-2"><strong>Service après-vente réactif</strong> et contrat d'entretien possible</li>
                        <li className="mb-2"><strong>Certification RGE,</strong> gage de qualité et d'éligibilité aux aides</li>
                    </ul>

                    <h2 className="text-xl lg:text-2xl text-[#017F7F] font-semibold">Alors n'hésitez plus :</h2>
                    <p className="text-lg lg:text-xl">
                        Remplissez le formulaire ou appelez-nous pour que l'on réponde à vos attentes !
                    </p>
                    <a className="text-3xl lg:text-4xl text-center font-semibold" href="tel:0164947536">01 64 94 75 36</a>
                    <span className="text-xl lg:text-2xl text-center">
                        1 rue du 19 mars 1962
                        <br/>
                        91150 MORIGNY CHAMPIGNY
                    </span>
                    <a className="text-xl lg:text-2xl text-center" href="mailto:sarl.temci@orange.fr">sarl.temci@orange.fr</a>
                </div>
                <div className="">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <h2 className="text-xl lg:text-2xl text-[#b00000] font-semibold">Contactez nous</h2>
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
                            <label className="block text-sm font-medium">Commentaire</label>
                            <textarea
                                name="message"
                                rows={6}
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
                            ></textarea>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="flex justify-center items-center px-4 py-3 font-semibold border border-[#b00000] bg-[#b00000] rounded-xl text-white hover:bg-white hover:text-[#b00000] transition-colors duration-300 cursor-pointer"
                            >
                                Envoyer
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Contact