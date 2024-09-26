import React, { useState } from "react";
import * as investmentApi from "@api/investment";
import { useAuthContext } from "@context/AuthContext";

import { useForm } from "react-hook-form";
import { FormWrapper, FormField, FormButton } from "@forms/FormComponents";

const BuyInvestments = ({ project }) => {
    const [loading, setLoading] = useState(false);

    const { current } = state;
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { state } = useAuthContext();

    const onSubmit = (formData) => {
        const investment = {
            amount,
            type,
            projectId: project._id,
        };

        investmentApi
            .createInvestment(investment)
            .then(() => {
                alert("Investment successful!");
            })
            .catch((error) => {
                console.error("Error creating investment:", error);
                alert("Investment failed.");
            });
    };

    return (
        <FormWrapper loading={loading} onSubmit={handleSubmit(onSubmit)}>
            <h2>Buy Investments</h2>
            <FormField
                label="Amount"
                type="number"
                name="amount"
                register={register}
                errors={errors}
                validationRules={{ required: "Amount is required" }}
            />

            <div>
                <h3>Summary</h3>
                <p>
                    Amount of {project.investmentDetails.type}: {amount}
                </p>
                <p>Total: {amount * project.investmentDetails.feauters.price}</p>
                <FormButton text="Invest now" disable={error} type="submit" />
            </div>
        </FormWrapper>
    );
};

export default BuyInvestments;
