import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faMapLocationDot, faSackDollar, faSun } from "@fortawesome/free-solid-svg-icons";

type AuthLayoutProps = {
    children: React.ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
    return (
        <div className="w-full h-screen flex flex-col items-center gap-y-16 md:grid md:grid-cols-[35%_65%] md:grid-rows-1 md:py-0">
            <div className="w-full px-8 flex flex-col justify-center md:h-full md:bg-brand-900 md:text-white md:gap-y-16">
                <Link
                    to="/"
                    className="flex items-center font-serif text-brand-800 text-3xl cursor-pointer md:text-5xl md:border-r-brand-800 md:text-white"
                >
                    <FontAwesomeIcon
                        icon={faLeaf}
                        className="mr-3 rounded-md bg-brand-800 text-white md:bg-white md:text-brand-800 p-2"
                    />
                    NaturaFund
                </Link>
                <div className="hidden md:flex md:items-center">
                    <FontAwesomeIcon
                        icon={faSun}
                        className="mr-3 w-6 h-6 rounded-md bg-white text-yellow-400 p-3"
                    />
                    <div className="text-sm">
                        <p className="font-semibold">Invest In Solar</p>
                        <p className="text-slate-300">
                            Investing in solar projects can provide attractive financial returns.
                        </p>
                    </div>
                </div>
                <div className="hidden md:flex md:items-center">
                    <FontAwesomeIcon
                        icon={faMapLocationDot}
                        className="mr-3 w-6 h-6 rounded-md bg-white text-red-800 p-3"
                    />
                    <div className="text-sm">
                        <p className="font-semibold">Based Lcoally</p>
                        <p className="text-slate-300">Our projects are managed by local teams</p>
                    </div>
                </div>
                <div className="hidden md:flex md:items-center">
                    <FontAwesomeIcon
                        icon={faSackDollar}
                        className="mr-3 w-6 h-6 rounded-md bg-white text-yellow-400 p-3"
                    />

                    <div className="text-sm">
                        <p className="font-semibold">Min. Initial Investment</p>
                        <p className="text-slate-300">Minimum investment of RM 300</p>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col items-center justify-evenly md:h-full">
                {children}
            </div>
        </div>
    );
};

export default AuthLayout;
