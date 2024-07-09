import React from "react";
import { Link } from "react-router-dom";
import Login from "@/components/Login";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";

const index = () => {
    return (
        <div className="w-full h-screen py-4 flex flex-col items-center gap-y-16">
            <h1 className="h-fit pt-3 flex items-center font-serif text-brand-800 text-3xl md:py-2 md:flex md:items-center md:text-3xl  md:border-r-brand-800 md:px-6">
                <FontAwesomeIcon
                    icon={faLeaf}
                    className="mr-3 rounded-md bg-brand-800 text-white p-2"
                />
                NaturaFund
            </h1>
            <h2 className="text-brand-900 text-xl font-semibold">Welcome back!</h2>
            <Login />
            <p className="text-sm">
                Dont have an account?{" "}
                <Link className="text-brand-700 hover:text-brand-900 hover:underline">
                    Register Here!
                </Link>
            </p>
        </div>
    );
};

export default index;
