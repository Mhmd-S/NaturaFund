import React, { useEffect, useState } from "react";
import ProjectCard from "@components/common/ProjectCard";
import * as projectAPI from "@api/project";
import { Link } from "react-router-dom";
import LoadingIcon from "@components/common/LoadingIcon";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        projectAPI.getProjects(1).then((response) => {
            setProjects(response.data);
            setLoading(false);
        });
    }, []);

    return (
        <div className="min-h-90 p-6 bg-white flex flex-col rounded-2xl">
            {loading ? (
                <LoadingIcon />
            ) : (
                <>
                    <div className="flex justify-between items-center">
                        <p className="text-lg font-bold text-brand-900">New Projects</p>
                        <Link to="/explore" className="text-brand-900 hover:underline">
                            Go To Explore
                        </Link>
                    </div>
                    <div className="w-full p-4 grid grid-cols-1 grid-flow-row place-items-center gap-8 bg-white rounded-2xl">
                        {projects.slice(0, 2).map((project, index) => (
                            <ProjectCard key={index} project={project} />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Projects;
