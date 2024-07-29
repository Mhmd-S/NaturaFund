import React from "react";
import RevenueGenerated from "@/components/ProjectDetails/RevenueGenerated";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faC, faCheck, faCircle } from "@fortawesome/free-solid-svg-icons";

const statuses = [
    {
        title: "Planning",
        description: "Project is in the planning stage. Details are being fleshed out.",
    },
    {
        title: "Funding",
        description: "Project is currently waiting for funding.",
    },
    {
        title: "Execution",
        description: "Project is being being built and developed.",
    },
    {
        title: "Electricity Generated",
        description: "The project started generating electricity.",
    },
];

const Status = ({ status }) => {
    const isPastStatus = (index) => {
        return index < statuses.findIndex((item) => item.title === status.current);
    };

    return (
        <>
            <section className="pl-24">
                <h2 className="text-3xl py-4 font-semibold capatalize">Steps</h2>
                <div>
                    <ol className="h-full flex flex-col gap-2 text-md font-medium text-gray-500 sm:gap-4">
                        {statuses.map((item, index) => (
                            <li key={item.title} className="relative mt-4 flex items-center">
                                <div
                                    className={`${index + 1 == Object.keys(statuses).length && "hidden"} ${isPastStatus(index) ? "bg-green-600" : "bg-gray-300"} absolute w-[1px] h-14 top-1/2 left-5`}
                                />
                                <span className="flex items-center justify-center mr-2 size-10 rounded-full bg-gray-50 text-center text-lg font-bold z-10">
                                    {item.title === status.current ? (
                                        <FontAwesomeIcon
                                            icon={faCircle}
                                            className="text-blue-600"
                                        />
                                    ) : isPastStatus(index) ? (
                                        <FontAwesomeIcon
                                            icon={faCheck}
                                            className="text-green-600"
                                        />
                                    ) : null}
                                </span>
                                <span
                                    className={`hidden sm:block ${
                                        item.title === status.current
                                            ? "text-blue-500"
                                            : isPastStatus(index)
                                              ? "text-green-600"
                                              : "text-gray-500"
                                    }`}
                                >
                                    {item.title}
                                </span>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>
            <section className="pr-24">
                <h2 className="text-3xl py-4 font-semibold capatalize">Updates</h2>
                <p>
                    {status.description} Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Cupiditate aliquid quasi eum in est repellat placeat, nostrum, quam, a ab magnam
                    natus. Delectus adipisci aliquid rem corrupti at saepe neque.
                </p>
            </section>
        </>
    );
};

export default Status;
