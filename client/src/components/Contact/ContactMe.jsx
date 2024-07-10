import React from "react";

import whatsappIcon from "../../assets/whatsapp-icon.png";
import phoneIcon from "../../assets/phone-icon.png";
import linkedinIcon from "../../assets/linkedin-icon.png";
import gmailIcon from "../../assets/gmail-icon.png";


const ContactMe = () => {
    return <>
        <div className="py-16 flex justify-center items-center gap-x-24">
            <h3 className="font-bold text-lg">Contact Me</h3>

            <div className="contact-options flex justify-center items-center gap-x-8">
                <a href="http://wa.me/7275589766">
                    <img src={whatsappIcon} alt="whatsapp-icon" className="w-8" />
                </a>
                <a href="mailto:harshkumar92200@gmail.com">
                    <img src={gmailIcon} alt="gmail-icon" className="w-8" />
                </a>
                <a href="https://www.linkedin.com/in/harsh-kumar-158634233/">
                    <img src={linkedinIcon} alt="linkedin-icon" className="w-8" />
                </a>
                <a href="tel:+917275589766">
                    <img src={phoneIcon} alt="phone-icon" className="w-8" />
                </a>
            </div>
        </div>
    </>;
};

export default ContactMe;