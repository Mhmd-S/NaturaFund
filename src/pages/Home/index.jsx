import React from "react";
import Revenue from "@/modules/Home/RevenueCHart";
import Portfolio from "@/modules/Home/PortfolioChart";
import Projects from "@/modules/Home/Projects";
import News from "@/modules/Home/News";

const Home = () => {
    return (
        <div className="w-full h-full p-6 flex flex-col gap-5">
            <h2 className="text-3xl p-4 text-brand-900 font-bold rounded-lg">
                Good morning, John
            </h2>
            <Revenue />
            <Portfolio />
            <Projects />
            <News />
        </div>
    );
};

export default Home;
