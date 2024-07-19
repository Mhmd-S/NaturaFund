import React from "react";
import RevenueChart from "@/components/Portfolio/RevenueChart";

const Portfolio = () => {
    return (
        <div className="w-full h-full overflow-hidden flex flex-col gap-[2px] bg-gray-100 [&>*]:bg-white">   
            <RevenueChart />
        </div>
    );
};

export default Portfolio;
