import React, { useState } from "react";
import * as investmentApi from "@api/investment";
import { useAuthContext } from "@context/AuthContext";

import { useForm } from "react-hook-form";
import { FormWrapper, FormField, FormButton, FormGeneralError } from "@forms/FormComponents";
import SuccessMessage from "@components/common/SuccessMessage";

import { toast } from "react-toastify";

import { get } from "lodash";

const BuyInvestments = ({ project }) => {
    const type = get(project, "investmentDetails.type", " ");
    const price = get(project, `investmentDetails.features[${type} Price]`, " ");

    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const { state } = useAuthContext();
    const { current } = state;

    const amount = watch("amount", "1");

    const onSubmit = async (formData) => {
        setLoading(true);
        const investment = {
            amount: formData.amount,
            user: current._id,
            userType: current.userType,
            project: project._id,
        };

        try {
            const response = await investmentApi.createInvestment(investment);
            const { status, data } = response;

            if (status === "success") {
                toast.success("Investment successful");
            }
        } catch (error) {
            toast.error("Failed to invest", { data: { description: error.message } });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="col-span-2 w-full min-h-full flex items-center justify-center">
            <FormWrapper loading={loading} onSubmit={handleSubmit(onSubmit)}>
                <div className="relative flex flex-col items-center justify-evenly gap-4 w-screen max-w-sm border border-gray-600 bg-gray-100 px-4 py-8 rounded-lg sm:px-6 lg:px-8">
                    <h3 className="w-full text-lg font-semibold text-gray-800">Buy Investments</h3>
                    <FormField
                        label="Amount"
                        type="number"
                        name="amount"
                        defaultValue="1"
                        min="1"
                        register={register}
                        errors={errors}
                        validationRules={{ required: "Amount is required" }}
                    />
                    <dl className="w-full grid grid-cols-2 gap-4">
                        <h3 className="text-lg font-semibold text-gray-800 col-span-2">Summary</h3>
                        <dt className="text-sm text-gray-900">
                            Amount of {project.investmentDetails.type}:
                        </dt>
                        <dd>{amount}</dd>
                        <dt className="text-sm text-gray-900">Price per {type}:</dt>
                        <dd>{price} RM</dd>
                        <dd className="text-smd text-gray-900">Total:</dd>
                        <dt>{amount * price} RM</dt>
                    </dl>
                    <FormButton
                        text="Invest now"
                        type="submit"
                        style="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                    />
                </div>
            </FormWrapper>
        </div>
    );
};

export default BuyInvestments;
