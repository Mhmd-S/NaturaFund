import React from "react";
import DetailsTable from "../DetailsTable";
import MultiColDetailsTable from "../MultiColDetailsTable";

const FinancialDetails = ({ finance }) => {
    return (
        <div className="grid grid-cols-2 gap-8">
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
        </div>
    );
};

export default FinancialDetails;
