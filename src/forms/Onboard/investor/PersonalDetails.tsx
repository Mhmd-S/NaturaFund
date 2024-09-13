import React from "react";
import useOnboardContext from "@modules/OnboardModule/context/useOnboardContext";
import { useForm } from "react-hook-form";

import FormWrapper from "@forms/FormComponents/FormWrapper";
import FormField from "@forms/FormComponents/FormField";
import FormSelect from "@forms/FormComponents/FormSelect";
import FormButton from "@forms/FormComponents/FormButton";

import COUNTRY_LIST from "@utils/CountryList";

const PersonalDetails = () => {
    const { data, setData, goNext } = useOnboardContext();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (formData) => {
        setData({ ...data, ...formData });
        goNext();
    };

    return (
        <FormWrapper onSubmit={handleSubmit(onSubmit)}>
            <div className="w-3/4 flex flex-col">
                <h2 className="text-3xl pb-4 font-semibold capatalize">Personal Details</h2>
                <div className="grid grid-cols-2 gap-4">
                    <FormField
                        name="firstName"
                        type="text"
                        label="First Name"
                        defaultValue={data.firstName}
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
                        defaultValue={data.lastName}
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
                    defaultValue={data.phoneNumber}
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
                <div className="grid grid-cols-2 gap-4">
                    <FormField
                        name="address"
                        type="text"
                        label="Address"
                        defaultValue={data.address}
                        register={register}
                        errors={errors}
                        placeholder="ex. 1, Persiaran Kewajipan, Usj 1, 47600 Subang Jaya, Selangor"
                        validationRules={{
                            required: "Address is required",
                            pattern: {
                                value: /^\d+\s?,\s?[a-zA-Z\s]+\s?,\s[a-zA-Z0-9\s]+\s?,\s?[0-9]{5}\s?[a-zA-z\s]+\s?,\s?[a-zA-z]+$/,
                                message:
                                    "The address should include: street number, street name, region, and town/city, state.",
                            },
                        }}
                    />
                    <FormSelect
                        register={register}
                        name="residence"
                        label="Place of Residence"
                        defaultValue={data.residence}
                        errors={errors}
                        options={COUNTRY_LIST}
                        validationRules={{
                            required: "Residence is required",
                            validate: (value) =>
                                value !== "DEFAULT" ? true : "Residence is required",
                        }}
                    />
                </div>

                <FormSelect
                    register={register}
                    name="nationality"
                    label="Nationality"
                    defaultValue={data.nationality}
                    errors={errors}
                    options={COUNTRY_LIST}
                    validationRules={{
                        required: "Nationality is required",
                        validate: (value) =>
                            value !== "DEFAULT" ? true : "Nationality is required",
                    }}
                />
                <FormButton type="button" text="Next" disable={Object.keys(errors).length !== 0} />
            </div>
        </FormWrapper>
    );
};

export default PersonalDetails;
