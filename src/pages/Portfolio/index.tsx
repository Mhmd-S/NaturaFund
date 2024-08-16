import React from "react";
import ProjectsTable from "@/components/common/ProjectsTable";
import SearchBar from "@/components/common/SearchBar";

// ToDo: cahnge the component name from index to something else

const dummyData = [
    {
        id: 1,
        name: "Project 1",
        amount: 100000,
        status: "Pending",
    },
    {
        id: 2,
        name: "Project 2",
        amount: 200000,
        status: "Approved",
    },
    {
        id: 3,
        name: "Project 3",
        amount: 300000,
        status: "Pending",
    },
    {
        id: 4,
        name: "Project 4",
        amount: 400000,
        status: "Approved",
    },
];

const Portfolio = () => {
    return (
        <div className="w-full p-6 bg-gray-300/25 overflow-y-auto">
            <div className="h-screen flex flex-col gap-6">
                <div className="flex justify-between items-center p-4 bg-white rounded-2xl">
                    <p className="text-lg font-bold text-brand-900">Your Investments</p>
                    <div className="w-1/3">
                        <SearchBar />
                    </div>
                </div>
                <ProjectsTable data={dummyData} handleOnClick={() => console.log(1)} />
            </div>
        </div>
    );
};

export default Portfolio;
