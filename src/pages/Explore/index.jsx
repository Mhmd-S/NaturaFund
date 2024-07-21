import React from "react";
import ProjectCard from "@/components/common/ProjectCard";
import SearchBar from "@/components/common/SearchBar";

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
    {
        name: "The Solar Project",
        type: "Solar",
        investment: {
            type: "Equity",
            return: "15%",
        },
        owner: "Owner 3",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde recusandae repellendus nihil inventore, temporibus dolor sapiente magni exercitationem? Reiciendis eaque maxime magni aspernatur amet. Atque sit odit a cum velit!",
        image: "https://via.placeholder.com/150",
    },
    {
        name: "The Solar Project",
        type: "Solar",
        investment: {
            type: "Equity",
            return: "15%",
        },
        owner: "Owner 3",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde recusandae repellendus nihil inventore, temporibus dolor sapiente magni exercitationem? Reiciendis eaque maxime magni aspernatur amet. Atque sit odit a cum velit!",
        image: "https://via.placeholder.com/150",
    },
    {
        name: "The Solar Project",
        type: "Solar",
        investment: {
            type: "Equity",
            return: "15%",
        },
        owner: "Owner 3",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde recusandae repellendus nihil inventore, temporibus dolor sapiente magni exercitationem? Reiciendis eaque maxime magni aspernatur amet. Atque sit odit a cum velit!",
        image: "https://via.placeholder.com/150",
    },
    {
        name: "The Solar Project",
        type: "Solar",
        investment: {
            type: "Equity",
            return: "15%",
        },
        owner: "Owner 3",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde recusandae repellendus nihil inventore, temporibus dolor sapiente magni exercitationem? Reiciendis eaque maxime magni aspernatur amet. Atque sit odit a cum velit!",
        image: "https://via.placeholder.com/150",
    },
];

const Explore = () => {
    return (
        <div className="w-full h-full p-4 bg-white">
            <div className="w-full flex justify-between items-center">
                <p className="text-lg font-bold text-brand-900">Explore</p>
                <div className="w-1/3">
                    <SearchBar />
                </div>
            </div>
            <div className="w-full py-4 grid grid-cols-4 gap-12">
              {dummyProjects.map((project, index) => (
                <ProjectCard project={project} key={index} />
              ))}
            </div>
        </div>
    );
};

export default Explore;
