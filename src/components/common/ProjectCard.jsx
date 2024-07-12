import React from "react";

const ProjectCard = ({ project }) => {
    return (
        <div className="w-full h-full flex flex-col items-center">
            <h3 className="text-brand-800">{project.name}</h3>
            <div>
                <p className="text-sm text-gray-med">Type: {project.type}</p>
                <p className="text-sm text-gray-med">Investment Type: {project.investment.type}</p>
                <p className="text-sm text-gray-med">Return: {project.investment.return}</p>
            </div>
            <p className="text-sm text-gray-med">By: {project.owner}</p>
            <button className="py-1 px-2 rounded-md border-[0.5px] border-brand-200 shadow-sm text-brand-900 bg-brand-50">
                View Project
            </button>
        </div>
    );
};

export default ProjectCard;
