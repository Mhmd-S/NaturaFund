import useEmailVerificationForm from "@/forms/RegistrationForm/hooks/useEmailVerificationForm";
import FormField from "@/forms/FormComponents/FormField";
import FormButton from "@/forms/FormComponents/FormButton";
import FormWrapper from "@/forms/FormComponents/FormWrapper";
import FormGeneralError from "@/forms/FormComponents/FormGeneralError";

const EmailVerificationForm = ({ setCurrentStep, email }) => {
    const { onSubmit, handleSubmit, register, isLoading, authError, errors } =
        useEmailVerificationForm({ setCurrentStep, email });

    return (
        <div className="w-full h-full flex flex-col justify-center items-center gap-y-8">
            <p className="w-full text-lg">
                Insert the <span className="text-brand-800 font-bold">5 digit code</span> sent to:{" "}
                <span className="text-gray-500"> {email}</span>
            </p>

            <FormWrapper loading={isLoading} onSubmit={handleSubmit(onSubmit)}>
                <FormGeneralError message={authError} />

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

                <FormButton
                    type="submit"
                    text="Verify Code"
                    loading={isLoading}
                    disable={Object.keys(errors).length !== 0}
                />
            </FormWrapper>
        </div>
    );
};

export default EmailVerificationForm;
