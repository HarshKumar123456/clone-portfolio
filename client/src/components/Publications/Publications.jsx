import React from "react";

var placeholder = "https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fzaqvl0oo956lvyt02hl5.jpg";

const Publications = () => {
    const publications = [
        {
            title: "Tic Tac Toe",
            description: "Use Confetti",
            image: placeholder,
            link: "https://yumrecipe-alpha.vercel.app/",
        },

    ]

    return <>
        <div className="publications-container pt-6 md:p-16">
            <h3 className="text-4xl font-bold">
                Publications
            </h3>

            <div className="publications pt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                {publications && publications.map((project, index) => (
                    <a href={project.link} className="project border border-black rounded-md flex flex-col gap-y-4" key={index}>
                        <img src={project.image} alt="project-image" className="object-fit max-h-40" />
                        <div className="info p-4">
                            <h3 className="font-bold">
                                {project.title}
                            </h3>
                            <p>{project.description}</p>
                        </div>
                        <button className="m-4 px-4 py-2 bg-black border text-white">
                            Publication Link
                        </button>
                    </a>
                ))}
            </div>
        </div>
    </>;
}

export default Publications;