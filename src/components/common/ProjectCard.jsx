import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong, faStar } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = ({ project }) => {
    return (
        <div className="w-64 h-68 p-4 flex flex-col justify-between items-center gap-2 bg-white rounded-lg border border-brand-400 ">
            <img src={project.image} alt="project" className="size-12 rounded-full" />
            <h4 className="text-gray-800 dark:text-gray-100 font-bold mb-3">{project.name}</h4>
            <h5 className="text-xs text-gray-500 mb-3">{project.owner}</h5>
            <div className="w-full px-3 flex flex-col divide-y divide-brand-400 text-xs">
                <div className="py-3 flex justify-between items-center">
                    <p className="text-gray-500">Duration</p>
                    <p>4 Years</p>
                </div>

                <div className="py-3 flex justify-between items-center">
                    <p className="text-gray-500">Invetment</p>
                    <p>RESCO</p>
                </div>

                <div className="py-3 flex justify-between items-center">
                    <p className="text-gray-500">XIRR</p>
                    <p>5%</p>
                </div>
            </div>
            <div className="w-full flex items-center justify-end p-1">
                {/* <FontAwesomeIcon
                    icon={faStar}
                    className="size-5 p-1 rounded-full border border-brand-800 text-brand-800 cursor-pointer"
                /> */}
                <FontAwesomeIcon
                    icon={faRightLong}
                    className="size-5 p-1 rounded-full border border-brand-800 bg-brand-800 text-white cursor-pointer"
                />
            </div>
        </div>
    );
};

export default ProjectCard;
