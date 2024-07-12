import React from "react";
import { PieChart } from "@mui/x-charts";

const Portofolio = () => {
    return (
        <div className="w-full h-full flex flex-col">
            <div className="w-full h-full flex flex-col">
                <p className="text-black text-lg font-semibold">$0.00</p>
            </div>
            <PieChart
                series={[
                    {
                        data: [
                            { id: 0, value: 45, label: "Lending" },
                            { id: 1, value: 5, label: "Equity" },
                            { id: 2, value: 50, label: "RESCO" },
                        ],
                    },
                ]}
            />
        </div>
    );
};

export default Portofolio;
