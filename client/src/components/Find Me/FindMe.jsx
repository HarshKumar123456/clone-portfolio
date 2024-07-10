import React from "react";

import whatsappIcon from "../../assets/whatsapp-icon.png";
import phoneIcon from "../../assets/phone-icon.png";
import linkedinIcon from "../../assets/linkedin-icon.png";
import gmailIcon from "../../assets/gmail-icon.png";


const FindMe = () => {
    return <>
        <div className="find-me-container pt-6 md:p-16">
            <h3 className="text-4xl font-bold">
                Or You Can Find me at
            </h3>

            <div className="pt-6 flex justify-between items-center gap-x-8">
                <a href="http://wa.me/7275589766" className="flex gap-4 items-center">
                    <img src={whatsappIcon} alt="whatsapp-icon" className="w-8" /> Whatsapp
                </a>
                <a href="mailto:harshkumar92200@gmail.com" className="flex gap-4 items-center">
                    <img src={gmailIcon} alt="gmail-icon" className="w-8" /> Gmail
                </a>
                <a href="https://www.linkedin.com/in/harsh-kumar-158634233/" className="flex gap-4 items-center">
                    <img src={linkedinIcon} alt="linkedin-icon" className="w-8" /> Linkedin
                </a>
                <a href="tel:+917275589766" className="flex gap-4 items-center">
                    <img src={phoneIcon} alt="phone-icon" className="w-8" /> Phone
                </a>
            </div>
        </div>
    </>;
}

export default FindMe;