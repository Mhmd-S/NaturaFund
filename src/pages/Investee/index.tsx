import React, { useState, useEffect } from "react";
import ProjectsTable from "@components/common/ProjectsTable";
import SearchBar from "@components/common/SearchBar";
import { useAuthContext } from "@context/AuthContext";
import * as projectApi from "@api/project";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FormButton } from "@forms/FormComponents";

const Investee = () => {
    const navigate = useNavigate();

    const { state } = useAuthContext();
    const { current } = state;

    const [searchText, setSearchText] = useState("");
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await projectApi.getProjecstByCorporation(current._id);
                const flattenedProjects = response.data.map(project => ({
                    _id: project._id,
                    name: project.name,
                    status: project.status.current,
                    investmentType: project.investmentDetails.type,
    
                }));
                setProjects(flattenedProjects);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        fetchProjects();
    }, [current._id]);

    const handleOnClick = (projectId: string) => {
        navigate(`/project/${projectId}`);
    };

    return (
        <div className="w-full p-6 bg-gray-300/25 overflow-y-auto">
            <div className="h-screen flex flex-col gap-6">
                <div className="flex justify-between items-center p-4 bg-white rounded-2xl">
                    <p className="text-lg font-bold text-brand-900">Your Fundraisers</p>
                    <div className="w-1/3">
                        <SearchBar searchText={searchText} setSearchText={setSearchText} />
                    </div>
                    <Link to={"/project/apply"}>
                        <FormButton text="Apply for Funding" type="button" />
                    </Link>
                </div>

                <ProjectsTable
                    data={projects}
                    ignoreData={["_id"]}
                    projectIdField="_id"
                    projectField="projectId"
                    searchText={searchText}
                    loading={loading}
                    error={error}
                    handleOnClick={handleOnClick}
                />
            </div>
        </div>
    );
};

export default Investee;
