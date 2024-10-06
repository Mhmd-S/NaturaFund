import React from "react";
import ToolTip from "@components/common/ToolTip";
import DetailsTable from "@components/common/DetailsTable";
import { normalizeCamelCase } from "@utils/extractHeader";

const FinancialDetails = ({ finance }) => {
    const financeTips = (key) => {
        switch (key) {
            case "I R R":
                return "IRR, or internal rate of return, is a metric used in financial analysis to estimate the profitability of potential investments. IRR is a discount rate that makes the net present value (NPV) of all cash flows equal to zero in a discounted cash flow analysis. ";
            case "N P V":
                return "Net present value (NPV) is the difference between the present value of cash inflows and the present value of cash outflows over a period of time. NPV is used in capital budgeting to analyze the profitability of an investment or project.";
            case "Break Even":
                return "The payback period is the amount of time it takes to recover the cost of an investment. The payback period is used by investors to determine the risk of an investment and to compare the profitability of different investments.";
            case "Risk Analysis":
                return "Risk analysis is the process of assessing the likelihood of an adverse event occurring within the corporate, government, or environmental sector. Risk analysis is the study of the underlying uncertainty of a given course of action.";
            case "Timeline":
                return "A timeline table is a visual representation of a project schedule. It shows the sequence of events over time and is used to plan, monitor, and manage a project.";
            case "Use Of Proceeds":
                return "Use of proceeds is a term used in financial reporting to describe the ways in which a company has used the money it has raised from investors. The use of proceeds is typically outlined in the company's financial statements or in a prospectus.";
            case "Allocation":
                return "Allocation is the process of distributing resources in order to achieve a specific goal. In finance, allocation refers to the distribution of capital among different asset classes or investment opportunities.";
            case "Revenue Forecast":
                return "Revenue forecasting is the process of estimating the future revenue of a business. Revenue forecasting is used by businesses to plan for future growth and to make informed decisions about resource allocation.";
            default:
                return "No tips available";
        }
    };

    return (
        <>
            {Object.keys(finance).map((key, index) => {
                return (
                    <div key={index}>
                        <h2 className="flex items-center gap-4 text-3xl py-4 font-semibold capatalize">
                            {normalizeCamelCase(key)}
                            <ToolTip text={financeTips(normalizeCamelCase(key))} />
                        </h2>
                        <DetailsTable items={finance[key]} />
                    </div>
                );
            })}
        </>
    );
};

export default FinancialDetails;
