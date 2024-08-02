import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong, faStar } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = ({ project }) => {
        const [isHovered, setIsHovered] = React.useState(false);

        return (
            <div
                className={`relative w-64 h-68 p-4 flex flex-col justify-between items-center gap-2 shadow-[2px_2px_5px_5px] shadow-brand-100 rounded-lg ${
                    isHovered ? "overlay" : ""
                }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <img src={project.image} alt="project" className="size-12 rounded-full" />
                <h4 className="text-gray-800 dark:text-gray-100 font-bold mb-3">{project.name}</h4>
                <h5 className="text-xs text-gray-500 mb-3">{project.owner}</h5>
                <div className="w-full px-3 flex flex-col divide-y divide-brand-400 text-xs">
                    <div className="py-3 flex justify-between items-center">
                        <p className="text-gray-500">Duration</p>
                        <p>4 Years</p>
                    </div>

                    <div className="py-3 flex justify-between items-center">
                        <p className="text-gray-500">Investment</p>
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
                {isHovered && (
                    <div className="absolute w-full h-full top-0 left-0 bg-brand-400 rounded-lg">
                        <p>Extra details</p>
                    </div>
                )}
            </div>
        );
    };

export default ProjectCard;
