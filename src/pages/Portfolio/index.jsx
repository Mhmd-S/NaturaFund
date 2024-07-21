import React from "react";
import RevenueChart from "@/components/Portfolio/RevenueChart";
import Projects from "@/components/Portfolio/Projects";

const Portfolio = () => {
    return (
        <div className="w-full h-full bg-gray-100 [&>*]:bg-white">   
            {/* <RevenueChart /> */}
            <Projects />
        </div>
    );
};

export default Portfolio;
