import React from "react";
import Revenue from "@/components/Home/Revenue";

const Home = () => {
    return (
        <div className="w-full h-full px-10 py-12">
            <h1 className="text-2xl text-brand-800 font-semibold">Home</h1>
            <div className="w-full h-full py-6 grid grid-cols[70%_30%] grid-rows-2">
                <Revenue />
            </div>
        </div>
    );
};

export default Home;
