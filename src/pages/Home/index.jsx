import React from "react";
import Revenue from "@/components/Home/Revenue";
import Portofolio from "@/components/Home/Portofolio";
import Projects from "@/components/Home/Projects";
import News from "@/components/Home/News";

const Home = () => {
    return (
        <div className="w-full h-full p-1  grid grid-cols-1 grid-rows-1">
            <div className="w-full h-full pb-2 grid grid-cols-[65%_35%] grid-rows-2">
                <Revenue />
                <Portofolio />
                <Projects />
                <News />
            </div>
        </div>
    );
};

export default Home;
