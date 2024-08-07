import React, { useState } from "react";

import Portfolio from "@/modules/Home/PortfolioChart";
import Projects from "@/modules/Home/Projects";
import LineChart from "@/modules/Home/RevenueChart/LineChart";
import BarChart from "@/modules/Home/RevenueChart/BarChart";

import ToggleButton from "@/components/common/ToggleButton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faLineChart, faPieChart } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
    const [dataToggleChart, setToggleChart] = useState(1); // 0 - revenue or 1 - portfolio

    return (
        <div className="w-full p-6 flex flex-col gap-5 bg-gray-300/25 overflow-y-auto">
            <h2 className="text-3xl p-4 text-brand-900 font-bold rounded-alg">
                Good morning, John
            </h2>
            <div className="p-6 grid grid-cols-2 bg-white rounded-2xl">
                <div className="grid grid-rows-3 gap-4">
                    <h3>Total Revenue this Month</h3>
                    <p className="w-fit text-3xl font-semibold border-b-2 border-dashed">$0.00</p>

                    <p className="text-sm text-gray-med">
                        <span className="text-green-500">
                            <FontAwesomeIcon icon={faArrowUp} className="pr-1" />
                            0.00%
                        </span>{" "}
                        vs last month
                    </p>
                </div>

                <LineChart />
            </div>

            <div className="min-h-90 p-6 bg-white flex flex-col rounded-2xl">
                <ToggleButton
                    current={dataToggleChart}
                    onClick={() => setToggleChart(!dataToggleChart)}
                    labels={["Revenue", "Portofolio"]}
                    icons={[faLineChart, faPieChart]}
                />
                {dataToggleChart === 0 ? <BarChart /> : <Portfolio />}
            </div>

            <Projects />
        </div>
    );
};

export default Home;
