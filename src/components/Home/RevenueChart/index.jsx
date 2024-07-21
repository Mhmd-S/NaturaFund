import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { BarChart } from "@mui/x-charts";

const RevenueChart = () => {
    return (
        <div className="w-full h-full p-4 grid grid-flow-row grid-cols-1">
            <div className="w-full h-full grid grid-cols-2 grid-rows-2 grid-flow-col">
                <p className="text-lg font-bold text-brand-900">Home</p>
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
            <BarChart
                xAxis={[
                    {
                        scaleType: "band",
                        data: [
                            "Jan",
                            "Feb",
                            "March",
                            "April",
                            "May",
                            "June",
                            "July",
                            "Aug",
                            "Sep",
                            "Oct",
                            "Nov",
                            "Dec",
                        ],
                        categoryGapRatio: 0.5,
                        barGapRatio: 0.6,
                    },
                ]}
                series={[
                    { label: "This Year", data: [4, 3, 5, 6, 2, 5, 6, 2, 1, 7, 9, 11] },
                    { label: "Last Year", data: [1, 6, 3, 6, 5, 2, 7, 4, 2, 7, 1, 2] },
                ]}
                colors={["#5A6ACF", "#E6E8EC"]}
                slotProps={{
                    legend: {
                        direction: "row",
                        position: { vertical: "bottom", horizontal: "left" },
                        padding: 0,
                        labelStyle: { fontSize: "0.7rem" },
                        itemMarkWidth: 5,
                        itemMarkHeight: 5,
                    },
                }}
                grid={{ horizontal: true }}
                margin={{
                    top: 10,
                    left: 25,
                    bottom: 40,
                }}
            />
        </div>
    );
};

export default RevenueChart;
