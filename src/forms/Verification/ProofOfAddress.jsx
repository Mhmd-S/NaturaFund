import React from "react";
import { useForm } from "react-hook-form";

import useVerificationContext from "@/modules/Verification/context/useVerificationContext";

import FormWrapper from "@/forms/formComponents/FormWrapper";
import FileUploadField from "@/forms/formComponents/FormFileUpload";
import FormButton from "@/forms/formComponents/FormButton";

const ProofOfAddress = () => {
    const { data, setData, goPrevStage, goNextStage } = useVerificationContext();

    const {
        register,
        handleSubmit,
        resetField,
        setError,
        formState: { errors },
    } = useForm();

    const onSubmit = (formData) => {
        // ToDo: Return the upload url to the data
        setData({ ...data, ...formData });
        goNextStage();
    };

    return (
        <FormWrapper onSubmit={handleSubmit(onSubmit)}>
            <div className="w-3/4 grid grid-flow-row gap-y-5">
                <h2 className="text-3xl font-semibold">Proof of Address</h2>
                <FileUploadField
                    type="file"
                    label={"Selfie with ID"}
                    name="profilePicture1"
                    register={register}
                    errors={errors}
                    resetField={resetField}
                    setError={setError}
                    validationRules={{
                        required: "Profile Picture is required",
                    }}
                />
                <div className=" p-2 grid grid-cols-2 gap-10">
                    <button
                        className="bg-white text-brand-800 border-2 border-brand-800 rounded-md transition-colors hover:bg-brand-800 hover:text-white"
                        onClick={goPrevStage}
                    >
                        Back
                    </button>
                    <FormButton text="Next" disable={Object.keys(errors).length !== 0} />
                </div>
            </div>
        </FormWrapper>
    );
};

export default ProofOfAddress;
