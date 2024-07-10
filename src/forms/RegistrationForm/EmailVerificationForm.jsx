import useEmailVerificationForm from "@/forms/RegistrationForm/hooks/useEmailVerificationForm";
import FormField from "@/forms/formComponents/FormField";
import FormButton from "@/forms/formComponents/FormButton";
import FormWrapper from "@/forms/formComponents/FormWrapper";
import FormGeneralError from "@/forms/formComponents/FormGeneralError";

const Step2EmailVerification = () => {
    const { onSubmit, handleSubmit, register, loading, generalError, errors } = useEmailVerificationForm();

    return (
        <div className="w-full h-3/4 flex flex-col justify-evenly bg-white border-[1.5px] border-my-orange p-4 rounded-lg shadow-lg md:w-2/6 md:h-5/6">
            <h3 className="w-full text-center text-xl pt-12">
                Insert the <span className="text-purple-700 font-bold">5 digit code</span> sent your
                email.
            </h3>

            <FormWrapper onSubmit={handleSubmit(onSubmit)}>
                <FormGeneralError message={generalError} />

                <FormField
                    label="Code"
                    name="code"
                    type="text"
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

                <FormButton text="Verify Code" loading={loading} />
            </FormWrapper>
        </div>
    );
};

export default Step2EmailVerification;
