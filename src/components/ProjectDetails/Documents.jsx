import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";

const Documents = ({ legal }) => {
    return (
        <div className="col-span-2 w-1/2 justify-self-center">
            <h2 className="text-3xl py-4 font-semibold">Documents</h2>
            <dl className="divide-y divide-gray-100 border border-gray-100 rounded-lg shadow-sm">
                {Object.entries(legal).map(([key, value], index) => (
                    <div
                        key={key}
                        className="grid grid-cols-[10%_30%_20%_40%] p-3 even:bg-gray-50"
                    >
                        <FontAwesomeIcon icon={faPaperclip} className="cursor-pointer text-gray-400" />
                        <dt className="capitalize">{key}</dt>
                        <dd className="text-sm text-gray-400">1.9 mb</dd>
                        <a href={value} className="text-blue-800 justify-self-end" >
                            Download
                        </a>
                    </div>
                ))}
            </dl>
        </div>
    );
};

export default Documents;
