import React from "react";
import FormWrapper from "@/forms/formComponents/FormWrapper";
import FormField from "@/forms/formComponents/FormField";

const PersonalDetails = () => {
    return (
        <div>
            <FormWrapper>
                <FormField
                    name="email"
                    type="email"
                    label="Email Address"
                    register={register}
                    errors={errors}
                    placeholder="ex. JohnDoe@gmail.com"
                    validationRules={{
                        required: "Email is required",
                        isEmail: "Invalid email",
                    }}
                />
            </FormWrapper>
        </div>
    );
};

export default PersonalDetails;
