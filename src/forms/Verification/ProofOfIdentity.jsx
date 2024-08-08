import React from "react";
import { useForm } from "react-hook-form";

import useVerificationContext from "@/modules/VerificationModule/context/useVerificationContext";

import FormWrapper from "@/forms/formComponents/FormWrapper";
import FileUploadField from "@/forms/formComponents/FormFileUpload";
import FormButton from "@/forms/formComponents/FormButton";

const ProofOfIdentity = () => {
    const { data, setData, goPrev, goNext } = useVerificationContext();

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
        goNext();
    };

    return (
        <FormWrapper onSubmit={handleSubmit(onSubmit)}>
            <div className="w-3/4 grid grid-flow-row gap-y-5">
                <h2 className="text-3xl font-semibold">Proof of Identity</h2>
                <FileUploadField
                    type="file"
                    label="Front of ID"
                    name="profilePicture1"
                    register={register}
                    errors={errors}
                    resetField={resetField}
                    setError={setError}
                    validationRules={{
                        required: "Profile Picture is required",
                    }}
                />
                <FileUploadField
                    type="file"
                    label={"Back of ID"}
                    name="profilePicture1"
                    register={register}
                    errors={errors}
                    resetField={resetField}
                    setError={setError}
                    validationRules={{
                        required: "Profile Picture is required",
                    }}
                />
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
