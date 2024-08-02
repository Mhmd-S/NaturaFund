import React, { useState } from "react";

import Revenue from "@/modules/Home/RevenueCHart";
import Portfolio from "@/modules/Home/PortfolioChart";
import Projects from "@/modules/Home/Projects";
import RevenueChart from "@/modules/Portfolio/RevenueChart";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faLineChart, faPieChart } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
    const [dataShow, setDataShow] = useState("revenue"); // revenue or  portfolio

    return (
        <div className="w-full p-6 flex flex-col gap-5 bg-gray-300/25 overflow-y-auto">
            <h2 className="text-3xl p-4 text-brand-900 font-bold rounded-lg">Good morning, John</h2>
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

                <RevenueChart />
            </div>

            <div className="min-h-90 p-6 bg-white flex flex-col rounded-2xl">
                <div className="w-fit p-2 rounded-3xl text-white bg-gray-300/25 space-x-1">
                    <button
                        className={`px-4 py-2 rounded-3xl ${dataShow === "revenue" ? "bg-white  text-black" : "text-gray-500"}`}
                        onClick={() => setDataShow("revenue")}
                    >
                        <FontAwesomeIcon icon={faLineChart} className="pr-1" />
                        Revenue
                    </button>
                    <button
                        className={`px-4 py-2 rounded-3xl ${dataShow === "portfolio" ? "bg-white  text-black" : "text-gray-500"}`}
                        onClick={() => setDataShow("portfolio")}
                    >
                        <FontAwesomeIcon icon={faPieChart} className="pr-1" />
                        Portfolio
                    </button>
                </div>
                {dataShow === "revenue" ? <Revenue /> : <Portfolio />}
            </div>

            <Projects />
        </div>
    );
};

export default Home;
