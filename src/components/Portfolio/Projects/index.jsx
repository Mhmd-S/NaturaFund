import SearchBar from "@/components/common/SearchBar";
import React from "react";
import ProjectsTable from "./ProjectsTable";

const index = () => {
    return (
        <div className="w-full h-full p-4 flex flex-col gap-y-2">
            <div className="w-full flex justify-between items-center">
                <p className="text-lg font-bold text-brand-900">Your Investments</p>
                <div className="w-1/3">
                    <SearchBar />
                </div>
            </div>
            <ProjectsTable />
        </div>
    );
};

export default index;
