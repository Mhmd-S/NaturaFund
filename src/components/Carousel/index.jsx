import React, { useEffect, useState } from "react";

const Carousel = ({ items }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((index + 1) % Object.keys(items).length);
        }, 4000);
        return () => clearInterval(interval);
    }, [index]);

    const renderIndicators = () => {
        const indicators = Object.values(items).map((item, ind) => {
            return (
                <span
                    key={item.title}
                    className={`relative flex-1 p-1 rounded-lg bg-slate-600 cursor-pointer`}
                    onClick={() => setIndex(ind)}
                >
                    <span
                        className={`absolute w-full h-full rounded-lg left-0 top-0 bg-brand-100 animate-carasol_indicator_5s_ease_in ${index == ind ? "block" : "hidden"}`}
                    />
                </span>
            );
        });
        return indicators;
    };

    const renderContent = () => {
        const currentContent = items[index];
        const content = (
            <>
                <h3 className="w-full text-2xl font-semibold">{currentContent.title}</h3>
                <div className="text-white">{currentContent.content}</div>
                <img className="w-full rounded-b-lg" src={"./" + currentContent.img} />
            </>
        );

        return content;
    };

    return (
        <div className="w-full p-4 h-max grid grid-cols-1 grid_flow-rows gap-4 bg-brand-900 bg-opacity-85 rounded-2xl text-white">
            <h2 className="w-full text-xl font-bold">How Does It Work?</h2>
            <div className="w-full grid grid-flow-col grid-rows-1 gap-1 items-center ">
                {renderIndicators()}
            </div>
            {renderContent()}
        </div>
    );
};

export default Carousel;
