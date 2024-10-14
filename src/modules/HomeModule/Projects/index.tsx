import React, { useEffect, useState } from "react";
import ProjectCard from "@components/common/ProjectCard";
import * as projectAPI from "@api/project";
import { Link } from "react-router-dom";
import LoadingIcon from "@components/common/LoadingIcon";
import EmptyState from "@components/common/EmptyState";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        projectAPI.getProjects(1).then((response) => {
            response.data = response.data.filter((project) => {
                return project.status.current !== "Planning";
            });
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
                        {projects.length >= 1 ? (
                            projects
                                .slice(0, 2)
                                .map((project, index) => (
                                    <ProjectCard key={index} project={project} />
                                ))
                        ) : (
                            <EmptyState
                                title="No Projects to display"
                                description="There are no projects available to view. Please check back later."
                            />
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default Projects;
