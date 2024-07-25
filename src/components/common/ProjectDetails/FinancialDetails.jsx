import React from "react";
import DetailsTable from "../DetailsTable";
import MultiColDetailsTable from "../MultiColDetailsTable";

const FinancialDetails = ({ finance }) => {
    return (
        <div className="mt-8 grid grid-cols-2 gap-8 lg:grid-cols-2 lg:gap-16">
            <div>
                <h2 className="text-3xl py-4 font-semibold capatalize">NPV and IRR</h2>
                <MultiColDetailsTable data={finance.projections.profitabilityMetrics} />
            </div>
            <div>
                <h2 className="text-3xl py-4 font-semibold capatalize">Break Even</h2>
                <DetailsTable items={finance.projections.breakEven} />
            </div>
            <div>
                <h2 className="text-3xl py-4 font-semibold capatalize">Allocation</h2>
                <DetailsTable items={finance.allocation} />
            </div>
            <div>
                <h2 className="text-3xl py-4 font-semibold capatalize">Risk Analysis</h2>
                <DetailsTable items={finance.riskAnalysis} />
            </div>
            <div>
                <h2 className="text-3xl py-4 font-semibold capatalize">Timeline</h2>
                <DetailsTable items={finance.timeline} />
            </div>
        </div>
    );
};

export default FinancialDetails;
