import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

import LoadingIcon from "@components/common/LoadingIcon";

import { getInvestmentsByProject } from "@api/investment";

const InvestmentsReceived = ({ project }) => {
    const [loading, setLoading] = useState(true);
    const [investments, setInvestments] = useState([]);

    useEffect(() => {
        getInvestmentsByProject(project._id)
            .then(response => setInvestments(response.data))
            .catch(err => toast.error("Couldn't get investors"))
            .finally(() => setLoading(false));
    }, []);

    const renderInvestments = () => {
        return investments.map((investment) => {
            return (
                <li className="relative w-full grid grid-cols-[10%_50%_30%] items-center">
                    <FontAwesomeIcon
                        icon={faCheck}
                        className="rounded-full bg-green-100 p-3 text-green-600"
                    />
                    <p className="text-md  justify-self-center">RM {investment.amount}</p>
                    <p className="text-gray-light text-sm justify-self-end text-right">
                        {investment.createdAt.split("T")[0]}
                    </p>
                </li>
            );
        });
    };

    const renderTotalInvestments = () => {
        return investments.reduce((prev, current) => {
            return prev + current.amount;
        }, 0);
    };

    return (
        <div className="col-span-2 flex flex-col items-center justify-center gap-6">
            <h2 className="col-span-2 text-3xl font-semibold">Received Investments</h2>
            <span id="ProgressLabel" className="sr-only">
                Investment Recieved
            </span>
            {loading ? (
                <div className="w-full h-full flex items-center justify-center">
                    <LoadingIcon />
                </div>
            ) : (
                <>
                    <div className="flex justify-between items-center">
                        <dd className="">Total Investments Received:</dd>
                        <dt className=" text-brand-900"> {renderTotalInvestments()} RM</dt>
                    </div>

                    <ol className="overflow-y-auto w-1/2 h-96 p-4 flex flex-col gap-4 border border-gray-200 rounded-lg">
                        {renderInvestments()}
                    </ol>
                </>
            )}
        </div>
    );
};

export default InvestmentsReceived;
