import React from "react";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts";

const PortfolioChart = () => {
    return (
        <div className="w-full h-full grid grid-cols-1 p-4 ">
            <div className="w-full h-full flex flex-col">
                <p className="text-lg font-bold text-brand-900">Portfolio</p>
            </div>
            <PieChart
                colors={["#5A6ACF", "#8593ED", "#C7CEFF"]} // Use palette
                series={[
                    {
                        data: [
                            { id: 0, value: 45, label: "Lending" },
                            { id: 1, value: 5, label: "Equity" },
                            { id: 2, value: 50, label: "RESCO" },
                        ],
                        innerRadius: 30,
                        outerRadius: 50,
                        highlightScope: { highlighted: "item", faded: "global" },
                    },
                ]}
                sx={{
                    [`& .${pieArcLabelClasses.root}`]: {
                        fill: "#37375C",
                        fontSize: "0.75rem",
                        color: "#FFFFFF",
                        fontWeight: "bold",
                    },
                }}
                slotProps={{
                    legend: {
                        direction: "row",
                        position: { vertical: "bottom", horizontal: "middle" },
                        padding: 0,
                        labelStyle: { fontSize: "0.7rem" },
                        itemMarkWidth: 5,
                        itemMarkHeight: 5,
                    },
                }}
                margin={{
                    bottom: 20,
                    right: 10,
                    left: 10,
                }}
            />
        </div>
    );
};

export default PortfolioChart;
