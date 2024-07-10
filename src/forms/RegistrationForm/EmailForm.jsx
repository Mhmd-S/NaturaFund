import { useEmailForm } from "./hooks/useEmailForm";
import FormButton from "@/forms/formComponents/FormButton";
import FormGeneralError from "@/forms/formComponents/FormGeneralError";
import FormWrapper from "@/forms/formComponents/FormWrapper";
import FormField from "@/forms/formComponents/FormField";
import { validatePasswords } from "./utils/Step1Validation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

const EmailForm = ({ setRegistrationType, setCurrentStep, setEmail }) => {
    const { register, onSubmit, handleSubmit, isLoading, generalError, watchPassword, errors } =
        useEmailForm({ setCurrentStep, setEmail });

    return (
        <div className="w-full flex flex-col items-center gap-y-8">
            <h3 className="w-full text-xl">
                <FontAwesomeIcon
                    icon={faChevronLeft}
                    className="mr-4 cursor-pointer"
                    onClick={() => setRegistrationType(0)}
                />
                Sign Up with Email
            </h3>
            <FormWrapper onSubmit={handleSubmit(onSubmit)}>
                {generalError && <FormGeneralError message={generalError} />}

                <FormField
                    label="Email"
                    name="email"
                    type="email"
                    register={register}
                    errors={errors}
                    placeholder="ex. TP012345@mail.apu.edu.my"
                    validationRules={{
                        required: "University email is required",
                        pattern: {
                            value: /^(TP\d{6}@mail\.apu\.edu\.my|\d{7}@sd\.taylors\.edu\.my|d{8}@imail\.sunway\.apu\.edu\.my)$/,
                            message: "Invalid student email",
                        },
                    }}
                />

                <FormField
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="Do not use your APU password"
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

                {/* <FormField
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
                /> */}

                <FormButton text="Verify Email" loading={isLoading} />
            </FormWrapper>
            <div className="w-full text-center text-sm pt-2 flex flex-col">
                <span>Already have an account? </span>
                <Link
                    to="/login"
                    className="text-center text-brand-700 hover:underline"
                >
                    Login Here!
                </Link>
            </div>
        </div>
    );
};

export default EmailForm;
