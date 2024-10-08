import React from "react";
import { Chart } from "react-google-charts";

const data = [
    ["Type of Investment", "Percentage"],
    ["ROSCA", 50],
    ["Equity", 25],
    ["Bonds", 25],
];

const options = {
    colors: ["#C8BDFA", "#A593F6", "#7256F1"],
};

const PortfolioChart = () => {
    return (
        <div className="w-full h-full grid grid-cols-2 p-4 bg-white rounded-lg">
                    <Chart
                        chartType="PieChart"
                        data={data}
                        options={{ ...options, title: "Portfolio Diversity" }}
                        width={"100%"}
                        height={"400px"}
                    />
                    <Chart
                        chartType="PieChart"
                        data={data}
                        options={{ ...options, title: "Revenue by Investment" }}
                        width={"100%"}
                        height={"400px"}
                    />
        </div>
    );
};

export default PortfolioChart;
