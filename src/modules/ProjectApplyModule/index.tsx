import React, { useEffect } from "react";
import ProjectApplyForm from "@forms/ProjectApplyForm";
import { useAuthContext } from "@context/AuthContext";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const ProjectApplyModule = () => {
    const naviate = useNavigate();

    const { state } = useAuthContext();
    const { current } = state;

    const handleGoBack = () => {
        naviate("/home");
    };

    useEffect(() => {
        if (current.userType !== "Corporation") {
            naviate("/home");
        }
    }, []);

    return (
        <div className="min-h-screen flex flex-col justify-between items-center px-4 py-10 bg-white rounded-2xl">
            <button
                onClick={handleGoBack}
                className="ml-4 justify-self-start place-self-start text-gray-600 hover:text-gray-800"
            >
                <FontAwesomeIcon icon={faChevronLeft} /> Back
            </button>
            <ProjectApplyForm />
        </div>
    );
};

export default ProjectApplyModule;
