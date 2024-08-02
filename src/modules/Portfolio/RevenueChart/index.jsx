import React, { useState } from "react";
import { Chart } from "react-google-charts";

const data = [
    ["Month", "Revenue"],
    ["Jan", 1000],
    ["Jan", 1000],
    ["Feb", 1170],
    ["Mar", 660],
    ["Apr", 660],
    ["May", 660],
    ["June", 660],
    ["July", 660],
];

const options = {
    colors: ["#A593F6", "#7256F1"],
    legend: { position: "none" },
    tooltip: { trigger: "none" },
};

const RevenueChart = () => {
    return (
        <div className="row-span-3 p-4 bg-white rounded-lg">
            <Chart chartType="Line" width="100%" height="150px" data={data} options={options} />
        </div>
    );
};

export default RevenueChart;
