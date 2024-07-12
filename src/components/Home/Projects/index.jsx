import React from "react";
import ProjectCard from "@/components/common/ProjectCard";

const dummyProjects = [
    {
        name: "Project 1",
        type: "Solar",
        investment: {
            type: "Equity",
            return: "10%",
        },
        owner: "Owner 1",
    },
    {
        name: "Project 2",
        type: "Wind",
        investment: {
            type: "Lending",
            return: "5%",
        },
        owner: "Owner 2",
    },
    {
        name: "Project 3",
        type: "Solar",
        investment: {
            type: "Equity",
            return: "15%",
        },
        owner: "Owner 3",
    },
];

const Projects = () => {
    return (
        <div className="w-full h-full p-4 flex flex-col border-gray-light border-r-[1px]">
            <div className="w-full flex justify-between items-center">
                <p className="text-sm">New Projects</p>
                <button className="py-1 px-2 rounded-md border-[0.5px] border-brand-200 shadow-sm text-brand-900 bg-brand-50">
                    View Project
                </button>
            </div>
            <div className="w-full flex items-center">
                {dummyProjects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
