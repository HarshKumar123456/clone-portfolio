import React, { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        contact: "",
        email: "",
        subject: "Connect Via Portfolio",
        body: "",
    });

    const handleChange = (e) => {
        setFormData((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }

    return <>
        <div className="contact-form-container pt-6 md:p-16">
            <h3 className="text-4xl font-bold">
                Say Hello to Me
            </h3>

            <form className="pt-6 flex flex-col gap-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="input flex flex-col">
                        <h4 className="font-semibold">Name</h4>
                        <input className="border border-2 border-gray-200" type="text" name="name" value={formData.name} onChange={handleChange} />
                    </div>
                    <div className="input flex flex-col">
                        <h4 className="font-semibold">Email</h4>
                        <input className="border border-2 border-gray-200" type="text" name="email" value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="input flex flex-col">
                        <h4 className="font-semibold">Contact</h4>
                        <input className="border border-2 border-gray-200" type="text" name="contact" value={formData.contact} onChange={handleChange} />
                    </div>

                </div>
                <div className="input flex flex-col">
                    <h4 className="font-semibold">Your Message</h4>
                    <textarea className="border border-2 border-gray-200 min-h-40" name="body">

                    </textarea>
                </div>
            </form>

            <button className="pt-6">
                <a href={`mailto:harshkumar92200@gmail.com?from=${formData.email}&subject=${formData.subject}&body=${"Hi, I am " + formData.name + " my contact details are " + formData.contact + " " + formData.email + " and here is my message. \n" + formData.body}`} className="m-4 px-4 py-2 bg-black border text-white">
                    Submit
                </a>
            </button>
        </div>

    </>;
}

export default ContactForm;