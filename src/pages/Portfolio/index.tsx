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
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        const fetchProjects = async () => {
            setLoading(true);
            try {
                const response = await investmentApi.getInvestmentsByInvestor(current._id);

                const reducedResponse = response.data.reduce((acc, investment) => {
                    const project = investment.project;

                    const itemFound = acc.find((accItem) => accItem._id === project._id);

                    if (itemFound) {
                        return acc;
                    }

                    const formatedInvestment = {
                        name: investment.project.name,
                        ...investment,
                        ...investment.project,
                        status: investment.project.status.current,
                        project: investment.project._id,
                    };

                    acc.push(formatedInvestment);
                    return acc;
                }, []);

                setProjects(reducedResponse);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

    const handleOnClick = (project: string) => {
        navigate(`/project/${project}`);
    };

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
                    data={projects}
                    loading={loading}
                    error={error}
                    ignoreData={["_id", "project"]}
                    projectField="project"
                    projectIdField="_id"
                    searchText={searchText}
                    handleOnClick={handleOnClick}
                />
            </div>
        </div>
    );
};

export default Portfolio;
