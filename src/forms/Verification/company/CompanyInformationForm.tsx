import React from "react";
import useVerificationContext from "@/modules/VerificationModule/context/useVerificationContext";
import { useForm } from "react-hook-form";

import FormWrapper from "@/forms/formComponents/FormWrapper";
import FormField from "@/forms/formComponents/FormField";
import FormSelect from "@/forms/formComponents/FormSelect";
import FormButton from "@/forms/formComponents/FormButton";
import FormFieldTextArea from "@/forms/formComponents/FormTextArea";

import COUNTRY_LIST from "@/utils/CountryList";
import { FormFileUpload, FormTextArea } from "@/forms/FormComponents";

const CompanyInformationForm = () => {
    const { data, setData, goNext } = useVerificationContext();

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
        <FormWrapper loading={false} onSubmit={handleSubmit(onSubmit)}>
            <div className="w-3/4 flex flex-col">
                <h2 className="text-3xl pb-4 font-semibold capatalize">Company Information</h2>
                <div className="grid grid-cols-2 gap-4">
                    <FormField
                        name="registered_name"
                        type="text"
                        label="Registered Name"
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
                        name="regitrations_type"
                        label="Registration Type"
                        errors={errors}
                        options={["Sdn Bhd", "Bhd", "LLP", "PLC"]}
                        defaultValue="DEFAULT"
                        validationRules={{
                            required: "Industry is required",
                            validate: (value) =>
                                value !== "DEFAULT" ? true : "Registration Type is required",
                        }}
                    />
                    <FormField
                        name="registration_number"
                        type="text"
                        label="Registration Number"
                        register={register}
                        errors={errors}
                        placeholder="Use the new format, e.g. 2020XXXXXXXX"
                        validationRules={{
                            required: "Registration is required",
                            pattern: {
                                value: /^[0-9]{4}0[123456][0-9]{6}$/,
                                message:
                                    "Invalid registartion number. Registration number must be in the new format, e.g. 2020XXXXXXXX",
                            },
                        }}
                    />
                    <FormField
                        name="incorporation_date"
                        type="date"
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
                <FormTextArea
                    rows={4}
                    name="description"
                    label="Description"
                    register={register}
                    errors={errors}
                    placeholder="ex. NaturaFund is a financial services company that provides investment and wealth management services."
                    validationRules={{
                        required: "Description is required",
                        maxLength: {
                            value: 200,
                            message: "Description should not exceed 200 characters",
                        },
                    }}
                />
                <FormFileUpload
                    name="business_license"
                    label="Business License"
                    register={register}
                    errors={errors}
                    validationRules={{
                        required: "Business license is required",
                    }}
                />
                <FormFileUpload
                    name="company_logo"
                    label="Company Logo"
                    register={register}
                    errors={errors}
                    validationRules={{
                        required: "Company logo is required",
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
