import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSolarPanel,
    faHandHoldingDollar,
    faMoneyBillTrendUp,
} from "@fortawesome/free-solid-svg-icons";

const ProjectCard = ({ project }) => {
    return (
        <div className="w-full h-full p-2 py-4 flex flex-col gap-y-5 justify-evenly items-center border-[1px] border-gray-light rounded-lg shadow-sm">
            <h3 className="text-brand-800 text-sm">{project.name}</h3>
            <div className="w-full flex items-center justify-evenly">
                <p className="flex flex-col items-center text-sm text-gray-med">
                    <FontAwesomeIcon icon={faSolarPanel} className="pr-1" />
                    {project.type}
                </p>
                <p className="flex flex-col items-center text-sm text-gray-med">
                    <FontAwesomeIcon icon={faHandHoldingDollar} className="pr-1" />
                    {project.investment.type}
                </p>
                <p className="flex flex-col items-center text-sm text-gray-med">
                    <FontAwesomeIcon icon={faMoneyBillTrendUp} className="pr-1" />
                    {project.investment.return}
                </p>
            </div>
            <p className="text-sm text-gray-med">By: {project.owner}</p>
            <button className="flex px-2 items-center justify-center rounded-md transition-all bg-brand-800 p-1 border-2 text-white hover:text-brand-800 md:transition-all md:hover:bg-white md:border-brand-800">
                View Project
            </button>
        </div>
    );
};

export default ProjectCard;
