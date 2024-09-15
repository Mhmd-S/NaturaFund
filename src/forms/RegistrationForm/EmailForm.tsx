import { useEmailForm } from "./hooks/useEmailForm";
import FormButton from "@forms/FormComponents/FormButton";
import FormGeneralError from "@forms/FormComponents/FormGeneralError";
import FormWrapper from "@forms/FormComponents/FormWrapper";
import FormField from "@forms/FormComponents/FormField";
import { validatePasswords } from "./utils/Step1Validation";

// WAS TESTING REGISTRATION

import { Link } from "react-router-dom";
import { FormSelect } from "../FormComponents";
import FormRadio from "../FormComponents/FormRadio";
import { faInstitution, faUser } from "@fortawesome/free-solid-svg-icons";

const EmailForm = ({ setCurrentStep, setEmail }) => {
    const { register, onSubmit, handleSubmit, isLoading, authError, watchPassword, errors } =
        useEmailForm({ setCurrentStep, setEmail });

    return (
        <div className="w-full min-h-full flex flex-col items-center gap-y-4">
            <FormWrapper loading={isLoading} onSubmit={handleSubmit(onSubmit)}>
                {authError && <FormGeneralError message={authError} />}

                <FormField
                    label="Email"
                    name="email"
                    type="email"
                    register={register}
                    errors={errors}
                    placeholder="ex. JohnDoe@email.com"
                    validationRules={{
                        required: "Email is required",
                        isEmail: "Invalid email",
                    }}
                />

                <div className="w-full grid grid-cols-2 gap-2">
                    <FormField
                        label="Password"
                        name="password"
                        type="password"
                        placeholder="********"
                        register={register}
                        errors={errors}
                        validationRules={{
                            required: "Password is required",
                            pattern: {
                                value: /^[A-Za-z\d@$!%*?&]{8,15}$/,
                                message: "Password must be 8-15 characters long",
                            },
                        }}
                    />

                    <FormField
                        label="Confirm Password"
                        name="confirmPassword"
                        type="password"
                        placeholder="********"
                        register={register}
                        errors={errors}
                        validationRules={{
                            required: "Confirm Password is required",
                            validate: (value) => {
                                return validatePasswords(value, watchPassword);
                            },
                        }}
                    />
                </div>

                <FormRadio
                    register={register}
                    defaultValue="individual"
                    options={[
                        {
                            name: "Individual",
                            value: "Investor",
                            icon: faUser,
                        },
                        {
                            name: "Corporation",
                            value: "Corporation",
                            icon: faInstitution,
                        },
                    ]}
                    name="userType"
                    label="Account Type"
                    errors={errors}
                    validationRules={{
                        required: "Account Type is required",
                    }}
                />

                <FormButton
                    text="Create Account"
                    type="submit"
                    loading={isLoading}
                    disable={Object.keys(errors).length !== 0}
                />
            </FormWrapper>
            <div className="w-full text-center text-sm flex flex-col">
                <span>Already have an account? </span>
                <Link to="/login" className="text-center text-brand-700 hover:underline">
                    Login Here!
                </Link>
            </div>
        </div>
    );
};

export default EmailForm;
