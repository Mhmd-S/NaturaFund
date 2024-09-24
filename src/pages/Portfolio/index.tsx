import React, { useEffect, useState } from "react";
import { useAuthContext } from "@context/AuthContext";
import ProjectsTable from "@components/common/ProjectsTable";
import SearchBar from "@components/common/SearchBar";
import * as investmentApi from "@api/investment";
import { useNavigate } from "react-router-dom";

// ToDo: change the component name from index to something else

const Portfolio = () => {

    const navigate = useNavigate();

    const { state } = useAuthContext();
    const { current } = state;

    const [projects, setProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await investmentApi.getInvestmentsByInvestor(current._id);

                // Making all fields the same level
                const mergedResult = response.data.map((investment) => ({
                    name: investment.projectId.name,
                    ...investment,
                    ...investment.projectId,
                    status: investment.projectId.status.current,
                    projectId: investment.projectId._id,
                }));

                console.log(mergedResult);

                setProjects(mergedResult);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

    const handleOnClick = (projectId: string) => {
        navigate(`/project/${projectId}`);
    }

    return (
        <div className="w-full p-6 bg-gray-300/25 overflow-y-auto">
            <div className="h-screen flex flex-col gap-6">
                <div className="flex justify-between items-center p-4 bg-white rounded-2xl">
                    <p className="text-lg font-bold text-brand-900">Your Portfolio</p>
                    <div className="w-1/3">
                        <SearchBar searchText={searchText} setSearchText={setSearchText} />
                    </div>
                </div>

                <ProjectsTable
                    data={filteredProjects}
                    loading={loading}
                    error={error}
                    ignoreData={["_id", "projectId"]}
                    projectIdField="projectId"
                    searchText={searchText}
                    handleOnClick={handleOnClick}
                />
            </div>
        </div>
    );
};

export default Portfolio;
