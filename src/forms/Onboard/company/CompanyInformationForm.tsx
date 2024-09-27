import React from "react";
import useOnboardContext from "@modules/OnboardModule/context/useOnboardContext";
import { useForm } from "react-hook-form";

import FormWrapper from "@forms/FormComponents/FormWrapper";
import FormField from "@forms/FormComponents/FormField";
import FormSelect from "@forms/FormComponents/FormSelect";
import FormButton from "@forms/FormComponents/FormButton";
import FormFieldTextArea from "@forms/FormComponents/FormTextArea";

import COUNTRY_LIST from "@utils/CountryList";
import { FormFileUpload, FormTextArea } from "@forms/FormComponents";

const CompanyInformationForm = () => {
    const { data, setData, goNext } = useOnboardContext();

    const {
        register,
        handleSubmit,
        clearErrors,
        resetField,
        formState: { errors },
    } = useForm();

    const onSubmit = (formData) => {
        const formDataTemp = data;

        formDataTemp.append("registeredName", formData.registeredName);
        formDataTemp.append("regitrationsType", formData.regitrationsType);
        formDataTemp.append("registrationNumber", formData.registrationNumber);
        formDataTemp.append("incorporationDate", formData.incorporationDate);
        formDataTemp.append("address", formData.address);
        formDataTemp.append("description", formData.description);
        formDataTemp.append("businessLicense", formData.businessLicense[0]);

        setData(formDataTemp);
        goNext();
    };

    return (
        <FormWrapper loading={false} onSubmit={handleSubmit(onSubmit)}>
            <div className="w-3/4 flex flex-col">
                <h2 className="text-3xl pb-4 font-semibold capatalize">Company Information</h2>
                <div className="grid grid-cols-2 gap-4">
                    <FormField
                        name="registeredName"
                        type="text"
                        label="Registered Name"
                        defaultValue={data.get("registeredName") || ""}
                        register={register}
                        errors={errors}
                        placeholder="ex. NaturaFund Sdn Bhd"
                        validationRules={{
                            required: "Registered name is required",
                            pattern: {
                                value: /^[a-zA-Z\s]{1,50}[Sdn|Bhd|LLP]*$/,
                                message: "Invalid registered name",
                            },
                        }}
                    />
                    <FormSelect
                        register={register}
                        name="regitrationsType"
                        label="Registration Type"
                        errors={errors}
                        options={["Sdn Bhd", "Bhd", "LLP", "PLC"]}
                        defaultValue={data.get("regitrationsType") || ""}
                        validationRules={{
                            required: "Industry is required",
                            validate: (value) =>
                                value !== "DEFAULT" ? true : "Registration Type is required",
                        }}
                    />
                    <FormField
                        name="registrationNumber"
                        type="text"
                        label="Registration Number"
                        defaultValue={data.get("registrationNumber") || ""}
                        register={register}
                        errors={errors}
                        placeholder="Use the new format, e.g. 2020XXXXXXXX"
                        validationRules={{
                            required: "Registration is required",
                            pattern: {
                                value: /^[0-9]{4}0[123456][0-9]{6}$/,
                                message:
                                    "Invalid registration number. Registration number must be in the new format, e.g. 2020XXXXXXXX",
                            },
                        }}
                    />
                    <FormField
                        name="incorporationDate"
                        type="date"
                        defaultValue={data.get("incorporationDate") || ""}
                        label="Incorporation Date"
                        register={register}
                        errors={errors}
                        validationRules={{
                            required: "Incorporation Date is required",
                        }}
                    />
                </div>
                <FormFieldTextArea
                    rows={4}
                    name="address"
                    label="Address"
                    register={register}
                    defaultValue={data.get("address") || ""}
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
                <FormTextArea
                    rows={4}
                    name="description"
                    label="Description"
                    register={register}
                    defaultValue={data.get("description") || ""}
                    errors={errors}
                    placeholder="ex. NaturaFund is a financial services company that provides investment and wealth management services."
                    validationRules={{
                        required: "Description is required",
                        minLength: {
                            value: 200,
                            message: "Description should be at least 200 characters",
                        },
                        maxLength: {
                            value: 500,
                            message: "Description should not exceed 500 characters",
                        },
                    }}
                />
                <FormFileUpload
                    name="businessLicense"
                    label="Business License"
                    currentFile={data.get("businessLicense") ? data.get("businessLicense")[0] : null}
                    accept="image/*"
                    acceptSize={30000}
                    inputGuidelines="Please upload a business license"
                    clearErrors={clearErrors}
                    register={register}
                    errors={errors}
                    resetField={resetField}
                    validationRules={{
                        required: "Business license is required",
                    }}
                />
                <FormButton
                    loading={false}
                    type="submit"
                    text="Next"
                    disable={Object.keys(errors).length !== 0}
                />
            </div>
        </FormWrapper>
    );
};

export default CompanyInformationForm;