import React from "react";

const Hero = () => {
    return <>
        <div className="bg-[#22223b] min-h-20 text-white grid grid-cols-1 md:grid-cols-2">
            <div className="image-container text-center p-8">

                <img src="https://media.licdn.com/dms/image/C4E16AQF6WN1922_Hcg/profile-displaybackgroundimage-shrink_350_1400/0/1646294574459?e=1726099200&v=beta&t=PAAdKP-YNZVhK0vazVixyNvzTwLlEdqpEGKzyjelQ2A" alt="my-photo" className="object-fit rounded-md" />
            </div>
            <div className="text-container flex flex-col justify-center items-center">
                <h2 className="text-4xl px-8">
                    Hello!
                </h2>
                Nice to see you here.
            </div>
        </div>
    </>;
}

export default Hero;