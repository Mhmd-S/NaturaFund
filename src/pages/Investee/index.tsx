import React, { useState } from "react";
import ProjectsTable from "@components/common/ProjectsTable";
import SearchBar from "@components/common/SearchBar";

const Investee = () => {
    return (
        <div className="w-full p-6 bg-gray-300/25 overflow-y-auto">
            <div className="h-screen flex flex-col gap-6">
                <div className="flex justify-between items-center p-4 bg-white rounded-2xl">
                    <p className="text-lg font-bold text-brand-900">Your Fundraisers</p>
                    <button>
                        Fund A Project
                    </button>
                    <div className="w-1/3">
                        <SearchBar />
                    </div>
                </div>
                <ProjectsTable data={dummyData} handleOnClick={() => console.log(1)} />
            </div>
        </div>
    );
};

export default Investee;
