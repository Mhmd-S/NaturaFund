import React, { useState } from "react";
import { set, useForm } from "react-hook-form";

import useOnboardContext from "@modules/OnboardModule/context/useOnboardContext";

import FormWrapper from "@forms/FormComponents/FormWrapper";
import FileUploadField from "@forms/FormComponents/FormFileUpload";
import FormButton from "@forms/FormComponents/FormButton";
import FormGeneralError from "@forms/FormComponents/FormGeneralError";

import { updateUser } from "@api/user";

import { useAuthContext } from "@context/AuthContext";

const ProofOfAddress = () => {
    const { data, setData, goPrev, goNext, loading, setLoading, error, setError } =
        useOnboardContext();

    const { state } = useAuthContext();

    const {
        register,
        handleSubmit,
        resetField,
        clearErrors,
        formState: { errors },
    } = useForm();

    const onSubmit = async (formData) => {
        setLoading(true);
        setError(null);

        formData.addressProof = URL.createObjectURL(formData.addressProof[0]);

        const response = await updateUser({
            ...data,
            ...formData,
            verified: "pending",
            _id: state.current._id,
        });
        const { status } = response;

        if (status === 200) {
            goNext();
        } else {
            setError("An error occurred, please try again.");
        }

        setLoading(false);
    };

    return (
        <FormWrapper onSubmit={handleSubmit(onSubmit)} loading={loading}>
            <div className="w-3/4 grid grid-cols-2 gap-y-4">
                <FormGeneralError message={error} />
                <h2 className="col-span-2 text-3xl font-semibold">Proof of Address</h2>
                <FileUploadField
                    accept="image/*"
                    currentFile={data.addressProof && data.addressProof[0]}
                    acceptSize={30000}
                    inputGuidelines="Please upload a proof of address"
                    resetField={resetField}
                    label={"Proof of Address (Bank Statement, Utility Bill, etc.)"}
                    name="addressProof"
                    register={register}
                    errors={errors}
                    clearErrors={clearErrors}
                    validationRules={{
                        required: "File is required",
                    }}
                />
                <div className="col-span-2 p-2 grid grid-cols-2 gap-10">
                    <button
                        type="button"
                        className="bg-white text-brand-800 border-2 border-brand-800 rounded-md transition-colors hover:bg-brand-800 hover:text-white"
                        onClick={goPrev}
                    >
                        Back
                    </button>
                    <FormButton
                        type="submit"
                        text="Complete"
                        disable={Object.keys(errors).length !== 0}
                    />
                </div>
            </div>
        </FormWrapper>
    );
};

export default ProofOfAddress;
