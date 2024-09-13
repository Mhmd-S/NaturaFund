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
    } = useForm();

    const onSubmit = (formData) => {
        // ToDo: Return the upload url to the data
        // transfrom the files to URL
        console.log(formData);

        setData({ ...data, ...formData });
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
                    name="frontID"
                    register={register}
                    currentFile={data.frontID && data.frontID[0]}
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
                    currentFile={data.backID && data.backID[0]}
                    name="backID"
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
                    currentFile={data.selfieID && data.selfieID[0]}
                    name="selfieID"
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
                        type="button"
                        className="bg-white text-brand-800 border-2 border-brand-800 rounded-md transition-colors hover:bg-brand-800 hover:text-white"
                        onClick={goPrev}
                    >
                        Back
                    </button>
                    <FormButton text="Next" disable={Object.keys(errors).length !== 0} />
                </div>
            </div>
        </FormWrapper>
    );
};

export default ProofOfIdentity;
