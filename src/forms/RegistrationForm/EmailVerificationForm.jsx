import useEmailVerificationForm from "@/forms/RegistrationForm/hooks/useEmailVerificationForm";
import FormField from "@/forms/formComponents/FormField";
import FormButton from "@/forms/formComponents/FormButton";
import FormWrapper from "@/forms/formComponents/FormWrapper";
import FormGeneralError from "@/forms/formComponents/FormGeneralError";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const EmailVerificationForm = ({ setCurrentStep, email }) => {
    const { onSubmit, handleSubmit, register, isLoading, generalError, errors } =
        useEmailVerificationForm({ setCurrentStep, email });

    return (
        <div className="w-full flex flex-col items-center gap-y-8">
            <h3 className="w-full text-xl">
                <FontAwesomeIcon
                    icon={faChevronLeft}
                    className="mr-4 cursor-pointer"
                    onClick={() => setCurrentStep(0)}
                />
                Sign Up with Email
            </h3>
            <p className="w-full text-lg">
                Insert the <span className="text-brand-800 font-bold">5 digit code</span> sent to:{" "}
                <span className="text-gray-500">JohnMayer@gmail.com</span>
                {email}
            </p>

            <FormWrapper onSubmit={handleSubmit(onSubmit)}>
                <FormGeneralError message={generalError} />

                <FormField
                    label="Verification Code"
                    name="code"
                    type="text"
                    placeholder="5 digit code"
                    register={register}
                    errors={errors}
                    validationRules={{
                        required: "Code is required",
                        pattern: {
                            value: /^[a-zA-Z0-9]{5}$/,
                            message: "Invalid code format",
                        },
                    }}
                />

                {/* ToDo: Add Send Code again function */}

                <FormButton
                    text="Verify Code"
                    loading={isLoading}
                    disable={Object.keys(errors).length !== 0}
                />
            </FormWrapper>
        </div>
    );
};

export default EmailVerificationForm;
