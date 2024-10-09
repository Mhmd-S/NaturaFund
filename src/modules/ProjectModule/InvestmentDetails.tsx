import React from "react";
import DetailsTable from "@components/common/DetailsTable";
import EmptyState from "@components/common/EmptyState";
import { faMehBlank } from "@fortawesome/free-solid-svg-icons";

const InvestmentDetails = ({ investment }) => {
    return (
        <>
            <section>
                <h2 className="text-3xl py-4 font-semibold capatalize">Investment Description</h2>
                {investment?.description ? <p>{investment.description}</p> : <EmptyState title="No Description" />}
            </section>
            <div>
                <h2 className="text-3xl py-4 font-semibold capatalize">
                    {investment?.type} Details
                </h2>
                {investment?.type ? <DetailsTable items={investment?.features} /> : <EmptyState title="No Details" />}
            </div>
        </>
    );
};

export default InvestmentDetails;
