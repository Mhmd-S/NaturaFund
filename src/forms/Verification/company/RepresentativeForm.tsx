import React from "react";
import useVerificationContext from "@/modules/VerificationModule/context/useVerificationContext";
import { useForm } from "react-hook-form";

import FormWrapper from "@/forms/formComponents/FormWrapper";
import FileUploadField from "@/forms/formComponents/FormFileUpload";
import FormField from "@/forms/formComponents/FormField";
import FormButton from "@/forms/formComponents/FormButton";

const RepresentativeForm = () => {
    const { data, setData, goNext, goPrev } = useVerificationContext();

    const {
        register,
        handleSubmit,
        resetField,
        setError,
        formState: { errors },
    } = useForm();

    const onSubmit = (formData) => {
        setData({ ...data, ...formData });
        goNext();
    };

    return (
        <FormWrapper onSubmit={handleSubmit(onSubmit)}>
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
                        name="work_email"
                        type="email"
                        label="Work Email"
                        register={register}
                        errors={errors}
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

export default RepresentativeForm;
