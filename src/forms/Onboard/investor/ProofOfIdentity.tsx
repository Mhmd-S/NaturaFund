import React from "react";
import { useForm } from "react-hook-form";

import useOnboardContext from "@modules/OnboardModule/context/useOnboardContext";

import FormWrapper from "@forms/FormComponents/FormWrapper";
import FileUploadField from "@forms/FormComponents/FormFileUpload";
import FormButton from "@forms/FormComponents/FormButton";

const ProofOfIdentity = () => {
    const { data, setData, goPrev, goNext } = useOnboardContext();

    const {
        register,
        handleSubmit,
        resetField,
        clearErrors,
        formState: { errors },
    } = useForm({
        defaultValues: {
            frontId: data.get("frontId") || null,
            backId: data.get("backId") || null,
            selfieId: data.get("selfieId") || null,
        },
    });

    const onSubmit = (formData) => {
        const formDataTemp = data;

        console.log("formData", formData);
        console.log(data);

        formDataTemp.set("frontId", formData.frontId[0] || formData.frontId);
        formDataTemp.set("backId", formData.backId[0] || formData.frontId);
        formDataTemp.set("selfieId", formData.selfieId[0] || formData.frontId);

        setData(formDataTemp);

        goNext();
    };

    return (
        <FormWrapper loading={false} onSubmit={handleSubmit(onSubmit)}>
            <div className="w-3/4 grid grid-cols-2 gap-4">
                <h2 className="col-span-2 text-3xl font-semibold">Proof of Identity</h2>
                <FileUploadField
                    inputGuidelines="Please upload a selfie with your ID"
                    accept="image/*"
                    acceptSize={30000}
                    label="Front of ID"
                    name="frontId"
                    register={register}
                    currentFile={data.get("frontId")}
                    errors={errors}
                    clearErrors={clearErrors}
                    resetField={resetField}
                    validationRules={{
                        required: "File is required",
                    }}
                />
                <FileUploadField
                    inputGuidelines="Please upload a selfie with your ID"
                    accept="image/*"
                    acceptSize={30000}
                    label={"Back of ID"}
                    currentFile={data.get("backId")}
                    name="backId"
                    register={register}
                    errors={errors}
                    resetField={resetField}
                    clearErrors={clearErrors}
                    validationRules={{
                        required: "File is required",
                    }}
                />
                <FileUploadField
                    inputGuidelines="Please upload a selfie with your ID"
                    accept="image/*"
                    acceptSize={30000}
                    label={"Selfie with ID"}
                    currentFile={data.get("selfieId")}
                    name="selfieId"
                    register={register}
                    errors={errors}
                    clearErrors={clearErrors}
                    resetField={resetField}
                    validationRules={{
                        required: "File is required",
                    }}
                />
                <div className="col-span-2 p-2 grid grid-cols-2 gap-10">
                    <button
                        type="submit"
                        className="bg-white text-brand-800 border-2 border-brand-800 rounded-md transition-colors hover:bg-brand-800 hover:text-white"
                        onClick={goPrev}
                    >
                        Back
                    </button>
                    <FormButton
                        type="submit"
                        text="Next"
                        disable={Object.keys(errors).length !== 0}
                    />
                </div>
            </div>
        </FormWrapper>
    );
};

export default ProofOfIdentity;
