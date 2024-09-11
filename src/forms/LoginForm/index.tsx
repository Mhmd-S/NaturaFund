import FormField from "@/forms/formComponents/FormField";
import FormButton from "@/forms/formComponents/FormButton";
import FormWrapper from "@/forms/formComponents/FormWrapper";
import useLoginForm from "@/forms/LoginForm/useLoginForm";
import FormRadio from "@/forms/FormComponents/FormRadio";
import FormGeneralError from "@/forms/formComponents/FormGeneralError";

import { Link } from "react-router-dom";
import { faInstitution, faUser } from "@fortawesome/free-solid-svg-icons";

const LoginForm = () => {
    const { register, handleSubmit, onSubmit, isLoading, errors, authError } = useLoginForm();
    console.log(errors);
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

                <FormRadio
                    register={register}
                    defaultValue={"investor"}
                    options={[
                        {
                            name: "Individual",
                            value: "investor",
                            icon: faUser,
                        },
                        {
                            name: "Corporation",
                            value: "corportaion",
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
