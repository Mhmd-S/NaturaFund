import React from "react";
import useOnboardContext from "@modules/OnboardModule/context/useOnboardContext";
import { useForm } from "react-hook-form";

import FormWrapper from "@forms/FormComponents/FormWrapper";
import FileUploadField from "@forms/FormComponents/FormFileUpload";
import FormField from "@forms/FormComponents/FormField";
import FormButton from "@forms/FormComponents/FormButton";

const RepresentativeForm = () => {
    const { data, goPrev, goNext, loading, setData } = useOnboardContext();

    const {
        register,
        handleSubmit,
        resetField,
        clearErrors,
        formState: { errors },
    } = useForm();

    const onSubmit = async (formData) => {
        setData({ ...data, representative: { ...formData } });
        goNext()
    };

    return (
        <FormWrapper loading={loading} onSubmit={handleSubmit(onSubmit)}>
            <div className="w-3/4 grid grid-flow-row gap-y-5">
                <h2 className="text-3xl font-semibold capatalize">Personal Details</h2>
                <p className="text-sm text-gray-light">
                    Please provide the details of the representative who will be responsible for
                    managing the account. The repesentative must have the authority to act on behalf
                    of the company.
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <FormField
                        name="firstName"
                        type="text"
                        defaultValue={data.representative && data.representative.firstName}
                        label="First Name"
                        register={register}
                        errors={errors}
                        placeholder="ex. John"
                        validationRules={{
                            required: "First name is required",
                            pattern: {
                                value: /^[a-zA-Z]{1,24}$/,
                                message:
                                    "First name must only contain letters and must be less than 24 characters long",
                            },
                        }}
                    />
                    <FormField
                        name="lastName"
                        type="text"
                        label="Last Name"
                        defaultValue={data.representative && data.representative.lastName}
                        register={register}
                        errors={errors}
                        placeholder="ex. Doe"
                        validationRules={{
                            required: "Last name is required",
                            pattern: {
                                value: /^[a-zA-Z]{1,24}$/,
                                message:
                                    "Last name must only contain letters and must be less than 24 characters long",
                            },
                        }}
                    />
                    <FormField
                        name="phoneNumber"
                        type="text"
                        label="Phone Number"
                        register={register}
                        defaultValue={data.representative && data.representative.phoneNumber}
                        errors={errors}
                        placeholder="ex. 123123123"
                        validationRules={{
                            required: "Phone number is required",
                            pattern: {
                                value: /^[0-9]{10}$/,
                                message:
                                    "Phone number must not include extension and should be of 10 digits ",
                            },
                        }}
                    />
                    <FormField
                        name="workEmail"
                        type="email"
                        label="Work Email"
                        register={register}
                        errors={errors}
                        defaultValue={data.representative && data.representative.workEmail}
                        placeholder="ex. johndoe123@email.com"
                        validationRules={{
                            required: "Email is required",
                            pattern: {
                                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                message:
                                    "Phone number must not include extension and should be of 10 digits ",
                            },
                        }}
                    />
                </div>
                <FileUploadField
                    inputGuidelines="Please upload a selfie with your ID"
                    accept="image/*"
                    acceptSize={30000}
                    label="Front of ID"
                    name="frontID"
                    register={register}
                    currentFile={data.representative && data.representative.frontID[0]}
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
                    currentFile={data.representative && data.representative.backID[0]}
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
                    currentFile={data.representative && data.representative.selfieID[0]}
                    name="selfieID"
                    register={register}
                    errors={errors}
                    clearErrors={clearErrors}
                    resetField={resetField}
                    validationRules={{
                        required: "File is required",
                    }}
                />
                <div className=" p-2 grid grid-cols-2 gap-10">
                    <button
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

export default RepresentativeForm;
