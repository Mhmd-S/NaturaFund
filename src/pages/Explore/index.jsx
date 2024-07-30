import React from "react";
import ProjectCard from "@/components/common/ProjectCard";
import SearchBar from "@/components/common/SearchBar";
import Pagination from "@/components/common/Pagination";

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
        image: "https://picsum.photos/400/294",
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
        image: "https://picsum.photos/400/295",
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
        image: "https://picsum.photos/400/296",
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
        image: "https://picsum.photos/400/297",
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
        image: "https://picsum.photos/400/298",
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
        image: "https://picsum.photos/400/299",
    },
];

const filterOptions = [
    {
        type: "Duration",
        options: [
            {
                label: "1 Year",
                value: "1",
            },
            {
                label: "2 Years",
                value: "2",
            },
            {
                label: "3 Years",
                value: "3",
            },
            {
                label: "4 Years",
                value: "4",
            },
            {
                label: "5 Years",
                value: "5",
            },
        ],
    },
    {
        type: "Return",
        value: "solar",
    },
    {
        label: "Wind",
        value: "wind",
    },
    {
        label: "Hydro",
        value: "hydro",
    },
];

const Explore = () => {
    return (
        <div className="w-full h-full p-4 bg-white">
            <div className="w-full flex justify-between items-center">
                <h2 className="text-lg font-bold text-brand-900">Explore</h2>
                <div className="w-1/3">
                    <SearchBar />
                </div>
            </div>
            <div className="w-full py-4 grid grid-cols-3 gap-y-2 gap-x-16">
                {dummyProjects.map((project, index) => (
                    <ProjectCard project={project} key={index} />
                ))}
            </div>
            <Pagination />
        </div>
    );
};

export default Explore;
