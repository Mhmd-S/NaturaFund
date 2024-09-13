import React from "react";
import { Link } from "react-router-dom";
import { HandThumbUpIcon } from "@heroicons/react/24/outline";

const SuccessMessage = () => {
    return (
        <div className="w-full h-full flex flex-col justify-evenly items-center gap-3">
            <HandThumbUpIcon className="w-24 h-24 text-brand-800" />

            <h2 className="pb-4 font-bold text-2xl text-center text-brand-800">
                Registration Complete!
            </h2>

            <p className="text-center px-2">A few steps away from meeting your new friends!</p>

            <Link to="/login" className="text-brand-800 hover:underline">
                Take me to the login page!
            </Link>
        </div>
    );
};

export default SuccessMessage;
