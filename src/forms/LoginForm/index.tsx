import FormField from "@/forms/formComponents/FormField";
import FormButton from "@/forms/formComponents/FormButton";
import FormWrapper from "@/forms/formComponents/FormWrapper";
import useLoginForm from "@/forms/LoginForm/useLoginForm";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const LoginForm = () => {
    const { register, handleSubmit, onSubmit, loading, errors } = useLoginForm();
    console.log(errors);
    return (
        <div className="w-full flex flex-col items-center gap-y-8">
            <FormWrapper loading={loading} onSubmit={handleSubmit(onSubmit)}>
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
                    loading={loading}
                    disable={Object.keys(errors).length !== 0}
                />
            </FormWrapper>

            <div className="w-full text-center text-sm pt-2 flex flex-col">
                <span>Forgot your password? </span>
                <Link
                    to="/request-reset-password"
                    className="text-center text-brand-700 hover:underline"
                >
                    Reset password
                </Link>
            </div>
        </div>
    );
};

export default LoginForm;
