import React from "react";
import useVerificationContext from "@/modules/Verification/context/useVerificationContext";
import { useForm } from "react-hook-form";

import FormWrapper from "@/forms/formComponents/FormWrapper";
import FormField from "@/forms/formComponents/FormField";
import FormSelect from "@/forms/formComponents/FormSelect";
import FormButton from "@/forms/formComponents/FormButton";

import COUNTRY_LIST from "@/utils/CountryList";

const PersonalDetails = () => {
    const { data, setData } = useVerificationContext();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (formData) => {
        setData({ ...data, ...formData });
    };

    return (
        <FormWrapper onSubmit={handleSubmit(onSubmit)}>
            <div className="w-3/4 flex flex-col">
                <h2 className="text-3xl py-4 font-semibold capatalize">Personal Details</h2>
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
                </div>
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
                    name="address"
                    type="text"
                    label="Address"
                    register={register}
                    errors={errors}
                    placeholder="ex. 1, Persiaran Kewajipan, Usj 1, 47600 Subang Jaya, Selangor"
                    validationRules={{
                        required: "Phone number is required",
                        pattern: {
                            value: /^[0-9]{10}$/,
                            message:
                                "Phone number must not include extension and should be of 10 digits ",
                        },
                    }}
                />
                <FormSelect
                    register={register}
                    name="nationality"
                    label="Nationality"
                    errors={errors}
                    options={COUNTRY_LIST}
                    validationRules={{
                        required: "Nationality is required",
                        validate: (value) =>
                            value !== "DEFAULT" ? true : "Nationality is required",
                    }}
                />
                <FormButton text="Next" disable={Object.keys(errors).length !== 0} />
            </div>
        </FormWrapper>
    );
};

export default PersonalDetails;
