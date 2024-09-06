import { useEmailForm } from "./hooks/useEmailForm";
import FormButton from "@/forms/formComponents/FormButton";
import FormGeneralError from "@/forms/formComponents/FormGeneralError";
import FormWrapper from "@/forms/formComponents/FormWrapper";
import FormField from "@/forms/formComponents/FormField";
import { validatePasswords } from "./utils/Step1Validation";

import { Link } from "react-router-dom";
import { FormSelect } from "../FormComponents";
import FormRadio from "../FormComponents/FormRadio";
import { faInstitution, faUser } from "@fortawesome/free-solid-svg-icons";

const EmailForm = ({ setCurrentStep, setEmail }) => {
    const { register, onSubmit, handleSubmit, isLoading, generalError, watchPassword, errors } =
        useEmailForm({ setCurrentStep, setEmail });

    return (
        <div className="w-full flex flex-col items-center gap-y-8">
            <FormWrapper loading={isLoading} onSubmit={handleSubmit(onSubmit)}>
                {generalError && <FormGeneralError message={generalError} />}

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
                    options={[
                        {
                            name: "Invididual",
                            value: "individual",
                            icon: faUser,
                        },
                        {
                            name: "Corporation",
                            value: "corportaion",
                            icon: faInstitution,
                        },
                    ]}
                    name="accountType"
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
            <div className="w-full text-center text-sm pt-2 flex flex-col">
                <span>Already have an account? </span>
                <Link to="/login" className="text-center text-brand-700 hover:underline">
                    Login Here!
                </Link>
            </div>
        </div>
    );
};

export default EmailForm;
