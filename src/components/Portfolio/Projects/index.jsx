import SearchBar from "@/components/common/SearchBar";
import React from "react";
import ProjectsTable from "./ProjectsTable";

const index = () => {
    return (
        <div className="w-full p-4 flex flex-col justify-between items-center">
            <div className="w-full flex justify-between items-center">
                <p className="text-lg">Your Investments</p>
                <div className="w-1/3">
                    <SearchBar />
                </div>
            </div>
            <ProjectsTable />
        </div>
    );
};

export default index;
