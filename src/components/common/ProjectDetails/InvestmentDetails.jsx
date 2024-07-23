import React from "react";
import DetailsTable from "../DetailsTable";

const InvestmentDetails = ({ investment }) => {

    return (
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-2 lg:gap-16">
            <section className="col-span-1">
                <h2 className="text-3xl py-4 font-semibold capatalize">Investment Description</h2>
                <p>
                {investment.description}
                </p>
            </section>
            <div>
                <h2 className="text-3xl py-4 font-semibold capatalize">
                    {investment.type} Details
                </h2>
                <DetailsTable items={investment.features} />
            </div>
        </div>
    );
};

export default InvestmentDetails;
