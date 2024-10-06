import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSolarPanel, faWind, faWater } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = ({ project }) => {
    const navigate = useNavigate();

    const renderIcon = () => {
        switch (project.investmentDetails.energyType) {
            case "Solar":
                return <FontAwesomeIcon icon={faSolarPanel} className="text-indigo-500" />;
            case "Wind":
                return <FontAwesomeIcon icon={faWind} className="text-indigo-500" />;
            case "Hydro":
                return <FontAwesomeIcon icon={faWater} className="text-indigo-500" />;
            default:
                return <FontAwesomeIcon icon={faSolarPanel} className="text-indigo-500" />;
        }
    }

    return (
        <article
            onClick={() => navigate(`/project/${project._id}`)}
            className="h-48 rounded-xl bg-white p-4 ring-1 ring-indigo-50 sm:p-6 lg:p-8 cursor-pointer hover:ring-indigo-500"
        >
            <div className="flex items-start sm:gap-8">
                <div
                    className="hidden sm:grid sm:size-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-indigo-500 "
                    aria-hidden="true"
                >
                    <div className="flex items-center gap-1">
                        {renderIcon()}
                    </div>
                </div>

                <div>
                    <strong className="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 mr-2 text-[10px] font-medium text-white">
                        {project.investmentDetails.energyType}
                    </strong>
                    <strong className="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 mr-2 text-[10px] font-medium text-white">
                        {project.investmentDetails.type}
                    </strong>
                    <strong className="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 mr-2 text-[10px] font-medium text-white">
                        {project.status.current} Phase
                    </strong>

                    <div className="mt-4 text-lg font-medium sm:text-xl">
                        <h3 href="#" className="hover:underline">
                            {project.name}
                        </h3>
                        <p className="mt-2 text-xs font-medium text-gray-500 sm:mt-0">
                            by {project.ownedBy.registeredName}
                        </p>
                    </div>

                    <p className="mt-1 text-sm text-gray-700">{project.description}</p>

                    {/* <div className="mt-4 sm:flex sm:items-center sm:gap-2">
                        <div className="flex items-center gap-2 text-gray-500">
                            <FontAwesomeIcon icon={faCalendarAlt} className="text-indigo-500" />
                            <p className="text-xs font-medium">
                                {project.investmentDetails.features["End Date"]} Closing Date
                            </p>
                        </div>

                        <span className="hidden sm:block" aria-hidden="true">
                            &middot;
                        </span>

                        <div className="flex items-center gap-2 text-gray-500">
                            <FontAwesomeIcon icon={faDollar} className="text-indigo-500" />
                            <p className="text-xs font-medium">
                                {project.financialDetails.IRR["Base Case"]} IRR
                            </p>
                        </div>
                    </div> */}
                </div>
            </div>
        </article>
    );
};

export default ProjectCard;
