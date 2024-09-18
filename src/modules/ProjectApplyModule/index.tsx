import React, { useEffect } from "react";
import ProjectApplyForm from "@forms/ProjectApplyForm";
import { useAuthContext } from "@context/AuthContext";
import { useNavigate } from "react-router-dom";

const ProjectApplyModule = () => {

    const naviate = useNavigate();

    const { state } = useAuthContext();
    const { current } = state;

    useEffect(() => {
        if (current.userType !== "Corporation") {
            naviate("/home");
        }
    }, []);

    return (
        <div className="min-h-screen flex justify-between items-center px-4 py-10 bg-white rounded-2xl">
            <ProjectApplyForm />
        </div>
    );
};

export default ProjectApplyModule;
