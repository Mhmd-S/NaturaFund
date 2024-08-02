import React from "react";
import Projects from "@/modules/Portfolio";

const Portfolio = () => {
    return (
        <div className="w-full h-full p-6 flex flex-col gap-5 bg-gray-300/25 overflow-y-auto">
            <Projects />
        </div>
    );
};

export default Portfolio;
