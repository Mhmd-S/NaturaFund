import React from "react";

const RotatingDisplay = () => {
    return (
        <div className="relative w-full h-full overflow-hidden bg-brand-800 text-white col-start-2 col-span-full">
            <p className="absolute text-xs top-0 left-0 overflow-x-hidden w-max h-full flex flex-col justify-center items-center animate-rotatingDisplay">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae fugiat facere
                    at? Quidem esse harum, minus quibusdam, quas molestias itaque excepturi fugiat
                    dolorem atque, incidunt illo placeat sunt autem dolorum?
            </p>
        </div>
    );
};

export default RotatingDisplay;
