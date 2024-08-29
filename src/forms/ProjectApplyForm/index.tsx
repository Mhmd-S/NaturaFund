import React from "react";

import { useForm } from "react-hook-form";

import FormField from "@/forms/FormComponents/FormField";
import FormWrapper from "@/forms/FormComponents/FormWrapper";
import FormButton from "@/forms/FormComponents/FormButton";
import FromTextArea from "@/forms/FormComponents/FormTextArea";
import FormFileUpload from "@/forms/FormFileUpload";
import FormSelect from "@/forms/FormComponents/FormSelect";

import COUNTRY_LIST from "@/utils/CountryList";
import FileUploadField from "../FormComponents/FormFileUpload";

const ProjectApplyForm = () => {
    const {
        register,
        handleSubmit,
        resetField,
        setError,
        formState: { errors },
    } = useForm();

    const onSubmit = (formData) => {
        // ToDo: Return the upload url to the data
    };

    return (
        <FormWrapper onSubmit={handleSubmit(onSubmit)}>
            <div className="w-3/4 flex flex-col">
                <h2 className="text-3xl pb-4 font-semibold capatalize">Project Application Form</h2>
                <FormField
                    name="projectName"
                    type="text"
                    label="Project Name"
                    register={register}
                    errors={errors}
                    placeholder="ex. John"
                    validationRules={{
                        required: "Project name is required",
                        pattern: {
                            value: /^[a-zA-Z]{1,24}$/,
                            message:
                                "Project name must only contain letters and must be less than 24 characters long",
                        },
                    }}
                />
                <div className="grid grid-cols-[20%_80%] gap-4">
                    <h3 className="col-span-2 text-2xl pb-4 font-semibold capatalize">
                        Project Location
                    </h3>
                    <FormSelect
                        register={register}
                        name="country"
                        label="Country"
                        errors={errors}
                        options={COUNTRY_LIST}
                        validationRules={{
                            required: "Country is required",
                            validate: (value) =>
                                value !== "DEFAULT" ? true : "Country is required",
                        }}
                    />
                    <FromTextArea
                        name="address"
                        type="text"
                        label="Project Address"
                        register={register}
                        errors={errors}
                        placeholder="ex. 1, Persiaran Kewajipan, Usj 1, 47600 Subang Jaya, Selangor"
                        validationRules={{
                            required: "Address is required",
                            pattern: {
                                value: /^\d+,\s?[A-Za-z\s]+(?:,\s?[A-Za-z\s]+)*,\s?\d{5}\s?[A-Za-z\s]+,\s?[A-Za-z\s]+$/,
                                message:
                                    "The address should include: street number, street name, region, and town/city, state.",
                            },
                        }}
                    />
                </div>
                <FromTextArea
                    name="description"
                    type="text"
                    label="Project Description"
                    register={register}
                    errors={errors}
                    placeholder="ex. This project aims to..."
                    validationRules={{
                        required: "Address is required",
                        pattern: {
                            value: /^\d+,\s?[A-Za-z\s]+(?:,\s?[A-Za-z\s]+)*,\s?\d{5}\s?[A-Za-z\s]+,\s?[A-Za-z\s]+$/,
                            message:
                                "The address should include: street number, street name, region, and town/city, state.",
                        },
                    }}
                />
                <FileUploadField
                    name="projectProposal"
                    label="Project Proposal Document"
                    register={register}
                    errors={errors}
                    validationRules={{
                        required: "Project document is required",
                    }}
                />
                <FormButton text="Submit" disable={Object.keys(errors).length !== 0} />
            </div>
        </FormWrapper>
    );
};

export default ProjectApplyForm;
