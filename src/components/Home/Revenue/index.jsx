import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { BarChart } from "@mui/x-charts";

const Revenue = () => {
    return (
        <div className="w-full h-full flex flex-col border-r-[1px] border-b-[1px]">
            <div className="w-full h-full grid grid-cols-2 grid-rows-3 grid-flow-col">
                <p className="text-sm">Revenue</p>
                <p className="text-lg font-semibold">$0.00</p>
                <p className="text-sm text-gray">
                    <span className="text-green-500">
                        <FontAwesomeIcon icon={faArrowUp} className="pr-1" />
                        0.00%
                    </span>{" "}
                    vs last month
                </p>
                <p className="text-sm text-gray">Revenue from this year</p>
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
                    },
                ]}
                series={[
                    { data: [3, 5] },
                    { data: [6, 3] },
                    { data: [5, 6] },
                    { data: [7, 8] },
                    { data: [9, 10] },
                    { data: [10, 12] },
                    { data: [12, 15] },
                    { data: [15, 18] },
                    { data: [18, 20] },
                    { data: [20, 22] },
                    { data: [22, 25] },
                    { data: [25, 30] },
                ]}
            />
        </div>
    );
};

export default Revenue;
