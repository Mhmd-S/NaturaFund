import React from "react";
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
};

const BarChart = () => {
    return (
        <div className="p-4 bg-white grid grid-flow-row grid-cols-1 rounded-lg">
            <Chart chartType="Bar" height="400px" data={data} options={options} />
        </div>
    );
};

export default BarChart;
