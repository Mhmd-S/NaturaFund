import SearchBar from "@/components/common/SearchBar";
import React from "react";
import ProjectsTable from "./ProjectsTable";

const index = () => {
    return (
        <>
            <div className="flex justify-between items-center p-4 bg-white rounded-2xl">
                <p className="text-lg font-bold text-brand-900">Your Investments</p>
                <div className="w-1/3">
                    <SearchBar />
                </div>
            </div>
            <ProjectsTable />
        </>
    );
};

export default index;
