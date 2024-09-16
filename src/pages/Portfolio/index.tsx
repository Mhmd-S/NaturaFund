import React, { useEffect, useState } from "react";
import { useAuthContext } from "@context/AuthContext";
import ProjectsTable from "@components/common/ProjectsTable";
import SearchBar from "@components/common/SearchBar";
import * as investmentApi from "@api/investment";
import LoadingIcon from "@components/common/LoadingIcon";

// ToDo: cahnge the component name from index to something else

const Portfolio = () => {
    const { state } = useAuthContext();
    const { current } = state;

    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

    return (
        <div className="w-full p-6 bg-gray-300/25 overflow-y-auto">
            <div className="h-screen flex flex-col gap-6">
                <div className="flex justify-between items-center p-4 bg-white rounded-2xl">
                    <p className="text-lg font-bold text-brand-900">Your Portofolio</p>
                    <div className="w-1/3">
                        <SearchBar />
                    </div>
                </div>
                {loading ? (
                    <LoadingIcon />
                ) : (
                    <ProjectsTable data={projects} ignoreData={["_id", "projectId"]} />
                )}
            </div>
        </div>
    );
};

export default Portfolio;
