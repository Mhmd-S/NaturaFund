import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faApple } from "@fortawesome/free-brands-svg-icons";

const RegistrationMenu = ({ setRegistrationType }) => {
    return (
        <div className="w-full h-full grid grid-cols-1 grid-flow-row items-center justify-evenly gap-y-6 text-brand-900">
            <h3 className="text-sm text-gray-400">
                Create an account to start investing in solar projects and earn returns.
            </h3>
            <p className="text-brand-900 font-semibold">Login with:</p>
            <div
                className="w-full px-4 py-2 border-2 border-slate-200 rounded-md flex items-center cursor-pointer hover:border-brand-900"
                onClick={() => setRegistrationType(1)}
            >
                <FontAwesomeIcon icon={faEnvelope} />
                <p className="pl-6">Email</p>
            </div>
            <div
                className="w-full px-4 p-2 border-2 border-slate-200 rounded-md flex items-center cursor-pointer hover:border-brand-900 "
                onClick={() => setRegistrationType(2)}
            >
                <FontAwesomeIcon icon={faGoogle} />
                <p className="pl-6">Google</p>
            </div>
            <div
                className="w-full px-4 p-2 border-2 border-slate-200 rounded-md flex items-center cursor-pointer hover:border-brand-900 "
                onClick={() => setRegistrationType(2)}
            >
                <FontAwesomeIcon icon={faApple} />
                <p className="pl-6">Apple</p>
            </div>
            <p className="text-sm">
                Already have an account?{" "}
                <Link to="/login" className="text-brand-700 hover:text-brand-900 hover:underline">
                    Login Here!
                </Link>
            </p>
        </div>
    );
};

export default RegistrationMenu;
