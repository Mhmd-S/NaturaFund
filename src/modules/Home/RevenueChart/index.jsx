import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Chart } from "react-google-charts";

const data = [
    ["Month", "Prev. Year", "Current Year"],
    ["Jan", 1000, 400],
    ["Feb", 1170, 460],
    ["Mar", 660, 1120],
    ["Apr", 660, 1120],
    ["May", 660, 1120],
    ["June", 660, 112],
    ["July", 660, 112],
];

const options = {
    colors: ["#A593F6", "#7256F1"],
    chart: {
        title: "Your Revenue",
        subtitle: "Revenue for current and previous year",
    },
};

const RevenueChart = () => {
    return (
        <div className="p-4 bg-white grid grid-flow-row grid-cols-1 rounded-lg">
            <div className="w-full h-full grid grid-cols-2 grid-rows-2 grid-flow-col">
                <p className="text-lg font-bold text-brand-900">Revenue this month</p>
                <p className="text-lg font-semibold">$0.00</p>
                <p className="text-sm text-gray-med text-right">2024</p>
                <p className="text-sm text-gray-med text-right">
                    <span className="text-green-500">
                        <FontAwesomeIcon icon={faArrowUp} className="pr-1" />
                        0.00%
                    </span>{" "}
                    vs last month
                </p>
            </div>
            <Chart chartType="Bar" height="400px" data={data} options={options} />
        </div>
    );
};

export default RevenueChart;
