import React from "react";
import DetailsTable from "@components/common/DetailsTable";
import { normalizeCamelCase } from "@utils/extractHeader";

const FinancialDetails = ({ finance }) => {
    return (
        <>
            {Object.keys(finance).map((key, index) => {
                return (
                    <div key={index}>
                        <h2 className="text-3xl py-4 font-semibold capatalize">{normalizeCamelCase(key)}</h2>
                        <DetailsTable items={finance[key]} />
                    </div>
                );
            })}
        </>
    );
};

export default FinancialDetails;
