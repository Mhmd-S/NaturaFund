import React from "react";
import RevenueChart from "@/components/Portfolio/RevenueChart";

const Portfolio = () => {
    return (
        <div className="w-full h-full p-2 grid grid-cols-1 grid-rows-2">
            <RevenueChart />
        </div>
    );
};

export default Portfolio;
