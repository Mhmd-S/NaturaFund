import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const LoginMenu = ({ setLoginType }) => {
    return (
        <div className="w-full h-full flex flex-col items-center gap-y-14 text-brand-900">
            <div
                className="w-full px-4 py-2 border-2 border-slate-500 rounded-md flex items-center cursor-pointer hover:border-brand-900"
                onClick={() => setLoginType(1)}
            >
                <FontAwesomeIcon icon={faEnvelope} />
                <p className="pl-6">Email</p>
            </div>
            <div
                className="w-full px-4 p-2 border-2 border-slate-500 rounded-md flex items-center cursor-pointer hover:border-brand-900"
                onClick={() => setLoginType(2)}
            >
                <FontAwesomeIcon icon={faGoogle} />
                <p className="pl-6">Google</p>
            </div>
        </div>
    );
};

export default LoginMenu;
