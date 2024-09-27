import React, { useState } from "react";

import { useAuthContext } from "@context/AuthContext";

import Portfolio from "@modules/HomeModule/PortfolioChart";
import Projects from "@modules/HomeModule/Projects";
import LineChart from "@modules/HomeModule/RevenueChart/LineChart";
import BarChart from "@modules/HomeModule/RevenueChart/BarChart";

import ToggleButton from "@components/common/ToggleButton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faLineChart, faPieChart } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
    const [toggleChart, setToggleChart] = useState(true); // true - revenue or false - portfolio

    const { state } = useAuthContext();

    const { current } = state;

    const renderGreeting = () => {
        const date = new Date();
        const hours = date.getHours();

        if (hours < 12) {
            return "Good morning,";
        } else if (hours < 18) {
            return "Good afternoon,";
        } else {
            return "Good evening,";
        }
    };

    return (
        <div className="w-full p-6 flex flex-col gap-5 bg-gray-300/25 overflow-y-auto">
            <h2 className="text-3xl p-4 text-brand-900 font-bold rounded-alg">
                {renderGreeting()}{" "}
                {current.userType == "Investor"
                    ? current.firstName
                    : JSON.parse(current.representative).firstName}
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
                    current={toggleChart}
                    handleOnClick={() => setToggleChart(!toggleChart)}
                    labels={["Revenue", "Portfolio"]}
                    icons={[faLineChart, faPieChart]}
                />
                {toggleChart ? <BarChart /> : <Portfolio />}
            </div>

            <Projects />
        </div>
    );
};

export default Home;
