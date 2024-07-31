import React from "react";
import { useForm } from "react-hook-form";

import useVerificationContext from "@/modules/Verification/context/useVerificationContext";

import FormWrapper from "@/forms/formComponents/FormWrapper";
import FileUploadField from "@/forms/formComponents/FormFileUpload";

const ProofOfIdentity = () => {
    const { data, setData } = useVerificationContext();

    const {
        register,
        handleSubmit,
        resetField,
        setError,
        formState: { errors },
    } = useForm();

    const onSubmit = (formData) => {
        setData({ ...data, ...formData });
    };

    return (
        <FormWrapper onSubmit={handleSubmit(onSubmit)}>
            <div className="w-1/2 h-full grid grid-rows-2 gap-4">
                <FileUploadField
                    type="file"
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
                    name="profilePicture1"
                    register={register}
                    errors={errors}
                    resetField={resetField}
                    setError={setError}
                    validationRules={{
                        required: "Profile Picture is required",
                    }}
                />
            </div>
        </FormWrapper>
    );
};

export default ProofOfIdentity;
