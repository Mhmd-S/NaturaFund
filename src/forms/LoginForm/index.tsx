import FormField from "@forms/FormComponents/FormField";
import FormButton from "@forms/FormComponents/FormButton";
import FormWrapper from "@forms/FormComponents/FormWrapper";
import useLoginForm from "@forms/LoginForm/useLoginForm";
import FormGeneralError from "@forms/FormComponents/FormGeneralError";

import { Link } from "react-router-dom";

const LoginForm = () => {
    const { register, handleSubmit, onSubmit, isLoading, errors, authError } = useLoginForm();

    return (
        <div className="w-full min-h-full flex flex-col items-center gap-y-4">
            <FormWrapper loading={isLoading} onSubmit={handleSubmit(onSubmit)}>
                <FormGeneralError message={authError} />
                <FormField
                    name="email"
                    type="email"
                    label="Email"
                    register={register}
                    errors={errors}
                    placeholder="ex. JohnDoe@gmail.com"
                    validationRules={{
                        required: "Email is required",
                        isEmail: "Invalid email",
                    }}
                />

                <FormField
                    name="password"
                    type="password"
                    label="Password"
                    register={register}
                    placeholder="********"
                    errors={errors}
                    validationRules={{
                        required: "Password is required",
                    }}
                />

                <FormButton
                    type="submit"
                    text="Log In"
                    loading={isLoading}
                    disable={Object.keys(errors).length !== 0}
                />
            </FormWrapper>

            <div className="w-full text-center text-sm flex flex-col">
                <span>Don't have an account? </span>
                <Link to="/registration" className="text-center text-brand-700 hover:underline">
                    Register Here!
                </Link>
            </div>
        </div>
    );
};

export default LoginForm;
