import React from "react";
import ProjectCard from "@/components/common/ProjectCard";
import { Link } from "react-router-dom";

const dummyProjects = [
    {
        name: "Regina Solar Project",
        type: "Solar",
        investment: {
            type: "Equity",
            return: "10%",
        },
        owner: "Owner 1",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde recusandae repellendus nihil inventore, temporibus dolor sapiente magni exercitationem? Reiciendis eaque maxime magni aspernatur amet. Atque sit odit a cum velit!",
        image: "https://via.placeholder.com/150",
    },
    {
        name: "Asia Pacific University",
        type: "Wind",
        investment: {
            type: "Lending",
            return: "5%",
        },
        owner: "Owner 2",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde recusandae repellendus nihil inventore, temporibus dolor sapiente magni exercitationem? Reiciendis eaque maxime magni aspernatur amet. Atque sit odit a cum velit!",
        image: "https://via.placeholder.com/150",
    },
];

const Projects = ({ setProjectInfo }) => {
    return (
        <div className="w-full h-full p-4 flex flex-col gap-y-3">
            <div className="w-full flex justify-between items-center">
                <p className="text-lg font-bold text-brand-900">New Projects</p>
                <Link className="text-brand-900 hover:underline">Go To Explore</Link>
            </div>
            <div className="w-full flex justify-evenly items-center">
                {dummyProjects.map((project, index) => (
                    <ProjectCard key={index} project={project} setProjectInfo={setProjectInfo} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
