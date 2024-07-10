import React from "react";

const Skills = () => {
    return <>
        <div className="skills-container pt-6 md:p-16">
            <h3 className="text-4xl font-bold">
                Skills
            </h3>

            <div className="education-info pt-8 grid grid-cols-1 md:grid-cols-2">
                <div className="skills-container flex flex-wrap gap-x-2 font-semibold">
                    <p className="px-4 py-2 h-fit bg-gray-200 rounded-full">
                        HTML
                    </p>
                    <p className="px-4 py-2 h-fit bg-gray-200 rounded-full">
                        CSS
                    </p>
                    <p className="px-4 py-2 h-fit bg-gray-200 rounded-full">
                        JavaScript
                    </p>
                    <p className="px-4 py-2 h-fit bg-gray-200 rounded-full">
                        Bootstrap
                    </p>
                    <p className="px-4 py-2 h-fit bg-gray-200 rounded-full">
                        Tailwind CSS
                    </p>
                    <p className="px-4 py-2 h-fit bg-gray-200 rounded-full">
                        MongoDB
                    </p>
                    <p className="px-4 py-2 h-fit bg-gray-200 rounded-full">
                        React Js
                    </p>
                    <p className="px-4 py-2 h-fit bg-gray-200 rounded-full">
                        Express Js
                    </p>
                    <p className="px-4 py-2 h-fit bg-gray-200 rounded-full">
                        Node Js
                    </p>
                    <p className="px-4 py-2 h-fit bg-gray-200 rounded-full">
                        C / C++
                    </p>
                    <p className="px-4 py-2 h-fit bg-gray-200 rounded-full">
                        Python
                    </p>
                </div>

                <div className="image-container">
                    <img src="https://media.licdn.com/dms/image/C4E16AQF6WN1922_Hcg/profile-displaybackgroundimage-shrink_350_1400/0/1646294574459?e=1726099200&v=beta&t=PAAdKP-YNZVhK0vazVixyNvzTwLlEdqpEGKzyjelQ2A" alt="my-photo" className="object-fit rounded-md" />
                </div>
            </div>
        </div>
    </>;
}

export default Skills;