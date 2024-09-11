import LoginForm from "@/forms/LoginForm";
import AuthLayout from "@/components/common/AuthLayout";

const Login = () => {
    return (
        <AuthLayout>
            <h2 className="text-lg font-semibold text-brand-900 md:text-2xl">Welcome back! </h2>
            <div className="w-4/5 flex flex-col items-center md:h-4/5 md:px-24">
                <LoginForm />
            </div>
        </AuthLayout>
    );
};

export default Login;
