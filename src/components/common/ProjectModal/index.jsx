import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const ProjectModal = ({ projectInfo, setShowProject }) => {
    return (
        <div className="w-full flex flex-col">
            <div className="w-full border-b-[1px] border-gray-light">
                <h1 className="text-2xl font-bold text-center">{projectInfo.name}</h1>
                <FontAwesomeIcon
                    icon={faClose}
                    onClick={() => setShowProject(false)}
                    className="absolute top-2 right-2 cursor-pointer"
                />
            </div>
            <p className="text-sm text-center">{projectInfo.description}</p>
            <div className="flex justify-center mt-4">
                <img src={projectInfo.image} alt={projectInfo.title} className="w-4/5 h-4/5" />
            </div>
        </div>
    );
};

export default ProjectModal;
