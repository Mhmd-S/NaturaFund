import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";

import FormField from "@forms/FormComponents/FormField";
import FormWrapper from "@forms/FormComponents/FormWrapper";
import FormButton from "@forms/FormComponents/FormButton";
import FormTextArea from "@forms/FormComponents/FormTextArea";
import FormSelect from "@forms/FormComponents/FormSelect";
import FormGeneralError from "@forms/FormComponents/FormGeneralError";
import MultiFileInput from "@forms/FormComponents/MultiFileInput";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import * as applicationApi from "@api/application";
import COUNTRY_LIST from "@utils/CountryList";
import SuccessMessage from "@forms/RegistrationForm/SuccessMessage";

const ProjectApplyForm = () => {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSucces] = useState(false);

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();

    const onSubmit = async (formData) => {
        setLoading(true);
        setError(null);

        // Create a FormData object
        const formDataToSend = new FormData();

        // set each field from formData to the FormData object
        for (const key in formData) {
            if (key === "documents") {
                // set each file in the documents array
                formData[key].forEach((file) => {
                    console.log(file);
                    formDataToSend.set("documents", file.file);
                });
            } else {
                formDataToSend.set(key, formData[key]);
            }
        }

        try {
            const response = await applicationApi.createApplication(formDataToSend);

            const { status } = response;

            if (status === "success") {
                setSucces(true);
            } else {
                setError("An error occurred, please try again.");
            }
        } catch (error) {
            setError("An error occurred, please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <FormWrapper loading={loading} onSubmit={handleSubmit(onSubmit)}>
            <div className="w-3/4 flex flex-col">
                {success && <SuccessMessage message="Application submitted successfully" />}
                <FormGeneralError message={error} />
                <h2 className="text-3xl pb-4 font-semibold capatalize">Project Application Form</h2>
                <FormField
                    name="name"
                    type="text"
                    label="Project Name"
                    register={register}
                    errors={errors}
                    placeholder="ex. John"
                    validationRules={{
                        required: "Project name is required",
                        pattern: {
                            value: /^[a-zA-Z\0-9]{1,50}$/,
                            message:
                                "Project name must only contain letters, numbers and space. Must also be less than 50 characters long",
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
                    <FormTextArea
                        name="address"
                        rows={3}
                        defaultValue=""
                        label="Project Address"
                        register={register}
                        errors={errors}
                        placeholder="ex. 1, Persiaran Kewajipan, Usj 1, 47600 Subang Jaya, Selangor"
                        validationRules={{
                            required: "Address is required",
                            pattern: {
                                value: /^[\d\s\w,.-]*$/,
                                message: "Please enter a valid address.",
                            },
                        }}
                    />
                </div>
                <FormTextArea
                    rows={5}
                    defaultValue=""
                    name="description"
                    label="Project Description"
                    register={register}
                    errors={errors}
                    placeholder="ex. This project aims to..."
                    validationRules={{
                        required: "Description is required",
                        minLength: {
                            value: 200,
                            message: "Description must be at least 200 characters long",
                        },
                        maxLength: {
                            value: 1000,
                            message: "Description must be less than 750 characters long",
                        },
                    }}
                />
                <h3 className="col-span-2 text-2xl pb-4 font-semibold capatalize">
                    Supporting Documents
                </h3>
                <MultiFileInput
                    label="Documents"
                    description="Upload files related to the project. Ex. Project Proposal, Agreements, Propects, etc."
                    name={"documents"}
                    control={control}
                />
                <FormButton
                    type="submit"
                    text="Submit"
                    disable={Object.keys(errors).length !== 0}
                />
            </div>
        </FormWrapper>
    );
};

export default ProjectApplyForm;
