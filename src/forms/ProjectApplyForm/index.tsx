import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import {
    FormMultiFileUpload,
    FormSelect,
    FormTextArea,
    FormButton,
    FormWrapper,
    FormField,
} from "@forms/FormComponents";

import * as applicationApi from "@api/application";

import COUNTRY_LIST from "@utils/CountryList";

const ProjectApplyForm = () => {
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        control,
        resetField,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: "Sabahan Farm",
            country: "Malaysia",
            address:
                "68, Jln Bukit Bintang, Bukit Bintang, 55100 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur",
            description:
                "68, Jln Bukit Bintang, Bukit Bintang, 55100 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur68, Jln Bukit Bintang, Bukit Bintang, 55100 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur kit Bintang, Bukit Bintang, 55100 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur",
        },
    });

    const onSubmit = async (formData) => {
        setLoading(true);

        // Create a FormData object
        const formDataToSend = new FormData();
        console.log(formData);
        // set each field from formData to the FormData object
        for (const key in formData) {
            console.log(key);
            if (key === "documents") {
                // Append each file in the FileList
                const fileList = formData[key];
                for (let i = 0; i < fileList.length; i++) {
                    const file = fileList[i];
                    console.log(file);
                    formDataToSend.append("documents", file);
                }
            } else {
                formDataToSend.set(key, formData[key]);
            }
        }

        try {
            const response = await applicationApi.createApplication(formDataToSend);

            const { status } = response;

            if (status === "success") {
                toast.success("Application Submitted Successfully");
            } else {
                toast.error("Failed to submit application");
            }
        } catch (error) {
            toast.error("Failed to submit application");
        } finally {
            setLoading(false);
        }
    };

    return (
        <FormWrapper loading={loading} onSubmit={handleSubmit(onSubmit)}>
            <div className="w-3/4 flex flex-col">
                <h2 className="text-3xl pb-4 font-semibold capatalize">Project Application Form</h2>
                <FormField
                    name="name"
                    type="text"
                    label="Project Name"
                    register={register}
                    errors={errors}
                    placeholder="ex. Sabahan Solar Farm"
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
                <FormMultiFileUpload
                    name="documents"
                    label="Documents"
                    inputGuidelines="Only PDF files are allowed"
                    accept="application/pdf"
                    acceptSize={200000}
                    register={register}
                    errors={errors}
                    validationRules={{
                        required: "Legal documents are required",
                    }}
                    resetField={resetField}
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
