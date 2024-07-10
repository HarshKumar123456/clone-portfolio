import React from "react";

var placeholder = "https://fastly.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA";

const Projects = () => {
    const projects = [
        {
            title: "Yum Recipe",
            description: "Recipe Sharing App",
            image: placeholder,
            link: "https://yumrecipe-alpha.vercel.app/",
        },
        {
            title: "E Commerce App",
            description: "App with payment feature",
            image: placeholder,
            link: "https://e-commerce-app-harsh-kumar.vercel.app/",
        },
        {
            title: "To Dos",
            description: "To Do List App",
            image: placeholder,
            link: "https://yumrecipe-alpha.vercel.app/",
        },

    ]

    return <>
        <div className="projects-container pt-6 md:p-16">
            <h3 className="text-4xl font-bold">
                Projects
            </h3>

            <div className="projects pt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                {projects && projects.map((project, index) => (
                    <a href={project.link} className="project border border-black rounded-md flex flex-col gap-y-4" key={index}>
                        <img src={project.image} alt="project-image" className="object-fit max-h-40" />
                        <div className="info p-4">
                            <h3 className="font-bold">
                                {project.title}
                            </h3>
                            <p>{project.description}</p>
                        </div>
                        <button className="m-4 px-4 py-2 bg-black border text-white">
                            Project Details
                        </button>
                    </a>
                ))}
            </div>
        </div>
    </>;
}

export default Projects;