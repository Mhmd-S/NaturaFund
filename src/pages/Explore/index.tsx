import React, { useState, useEffect, useRef } from "react";
import ProjectCard from "@components/common/ProjectCard";
import SearchBar from "@components/common/SearchBar";
import * as projectApi from "@api/project";
import EmptyState from "@components/common/EmptyState";
import { faMeh } from "@fortawesome/free-solid-svg-icons";
import LoadingIcon from "@components/common/LoadingIcon";

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
    const [searchText, setSearchText] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [projects, setProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const containerRef = useRef(null);

    useEffect(() => {
        fetchProjects();
    }, []);

    useEffect(() => {
        const filtered = projects.filter((project) =>
            Object.values(project).some((value) =>
                value.toString().toLowerCase().includes(searchText.toLowerCase())
            )
        );
        setFilteredProjects(filtered);
    }, [searchText, projects]);

    const fetchProjects = async () => {
        setIsLoading(true);
        const res = await projectApi.getProjects();
        if (res.status === "success") {
            res.data = res.data.filter((project) => {
                return project.status.current !== "Planning";
            });
            setProjects(res.data);
            setIsLoading(false);
            return;
        }
        setIsLoading(false);
    };

    return (
        <div className="w-full h-full p-6 bg-gray-300/20 space-y-6 overflow-y-auto">
            <div className="w-full p-4 flex justify-between items-center bg-white rounded-2xl">
                <h2 className="text-lg font-bold text-brand-900">Explore</h2>
                <div className="w-1/3">
                    <SearchBar searchText={searchText} setSearchText={setSearchText} />
                </div>
            </div>
            <div
                className="w-full min-h-screen p-4 flex flex-col gap-4 bg-white rounded-2xl"
                ref={containerRef}
            >
                {isLoading ? (
                    <div className="w-full h-full flex items-center justify-center">
                        <LoadingIcon />
                    </div>
                ) : (
                    <>
                        {filteredProjects.length > 0 ? (
                            filteredProjects.map((project, index) => (
                                <ProjectCard project={project} key={index} />
                            ))
                        ) : (
                            <EmptyState title="Nothing to display" icon={faMeh} />
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default Explore;
