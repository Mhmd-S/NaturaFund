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
        getValues,
        formState: { errors },
    } = useForm({
        defaultValues: {
            firstName: data?.representative ? data?.representative.firstName : "",
            lastName: data?.representative ? data?.representative.lastName : "",
            phoneNumber: data?.representative ? data?.representative.phoneNumber : "",
            workEmail: data?.representative ? data?.representative.workEmail : "",
            frontId: data.get("frontId") || null,
            backId: data.get("backId") || null,
            selfieId: data.get("selfieId") || null,
        },
    });

    const onSubmit = async (formData) => {
        const formDataTemp = data;

        formDataTemp.representative = {
            ...formData.representative,
            firstName: formData.firstName,
            lastName: formData.lastName,
            phoneNumber: formData.phoneNumber,
            workEmail: formData.workEmail,
        };

        console.log(formDataTemp);

        formDataTemp.set("representative", JSON.stringify(formDataTemp.representative));
        formDataTemp.set("frontId", formData.frontId[0] || formData.frontId);
        formDataTemp.set("backId", formData.backId[0] || formData.backId);
        formDataTemp.set("selfieId", formData.selfieId[0] || formData.selfieId);

        setData(formDataTemp);
        goNext();
    };

    return (
        <FormWrapper loading={loading} onSubmit={handleSubmit(onSubmit)}>
            <div className="w-3/4 grid grid-flow-row gap-y-5">
                <h2 className="text-3xl font-semibold capatalize">Represantive Details</h2>
                <p className="text-sm text-gray-light">
                    Please provide the details of the representative who will be responsible for
                    managing the account. The representative must have the authority to act on
                    behalf of the company.
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <FormField
                        name="firstName"
                        type="text"
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
                        placeholder="ex. johndoe123@email.com"
                        validationRules={{
                            required: "Email is required",
                            pattern: {
                                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                message: "Email must be a valid email address",
                            },
                        }}
                    />
                </div>
                <div className="grid grid-cols-2 gap-4">
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
                </div>
                <div className=" p-2 grid grid-cols-2 gap-10">
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

export default RepresentativeForm;
