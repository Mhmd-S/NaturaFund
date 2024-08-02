import React, { useState } from "react";
import Revenue from "@/modules/Home/RevenueCHart";
import Portfolio from "@/modules/Home/PortfolioChart";
import Projects from "@/modules/Home/Projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import RevenueChart from "@/modules/Portfolio/RevenueChart";

const Home = () => {
    const [dataShow, setDataShow] = useState("revenue"); // revenue or  portfolio

    return (
        <div className="w-full h-full p-6 flex flex-col gap-5 bg-gray-300/25 overflow-y-auto">
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

            <div className="p-6 bg-white flex flex-col rounded-2xl">
                <div className=" p-1 rounded-2xl">
                    <button>Revenue</button>
                    <button>Portfolio</button>
                </div>
                {dataShow === "revenue" ? <Revenue /> : <Portfolio />}
            </div>
            <Projects />
        </div>
    );
};

export default Home;
