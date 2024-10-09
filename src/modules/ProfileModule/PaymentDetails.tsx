import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { useAuthContext } from "@context/AuthContext";

import { FormWrapper, FormField, FormButton, FormGeneralError } from "@forms/FormComponents";

import { updateUser } from "@api/user";

const PaymentDetails = () => {
    const [loading, setLoading] = useState(false);

    const { state } = useAuthContext();

    const bankAccount = JSON.parse(state.current.bankAccount);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: {
            ...bankAccount,
        },
    });

    const onSubmit = async (formData) => {
        setLoading(true);

        try {
            const response = await updateUser(state.current._id, {
                bankAccount: JSON.stringify(formData),
            });
            const { status, data } = response;

            if (status === "success") {
                toast.success("Bank account updated successfully");
            }
        } catch (error) {
            toast.error("Failed to update bank account");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="h-full">
            <h2 className="text-3xl py-4 font-semibold">Payment Details</h2>

            <FormWrapper loading={loading} onSubmit={handleSubmit(onSubmit)}>
                <div className="relative flex flex-col items-center justify-evenly gap-4 w-screen max-w-sm border border-gray-600 bg-gray-100 px-4 py-8 rounded-lg sm:px-6 lg:px-8">
                    <h3 className="w-full text-lg font-semibold text-gray-800">Bank Information</h3>
                    <FormField
                        label="Account Number"
                        type="text"
                        name="accountNumber"
                        register={register}
                        errors={errors}
                        validationRules={{ required: "Account Number is required" }}
                    />
                    <FormField
                        label="Bank Name"
                        type="text"
                        name="bankName"
                        register={register}
                        errors={errors}
                        validationRules={{ required: "Bank Name is required" }}
                    />
                    <FormField
                        label="Account Name"
                        type="text"
                        name="accountName"
                        register={register}
                        errors={errors}
                        validationRules={{ required: "Account Name is required" }}
                    />

                    <FormButton
                        text="Save"
                        type="submit"
                        style="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                    />
                </div>
            </FormWrapper>
        </div>
    );
};

export default PaymentDetails;
