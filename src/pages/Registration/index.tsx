import React from "react";

import RegistrationForm from "@/forms/RegistrationForm";

import AuthLayout from "@/components/common/AuthLayout";

const Registration = () => {
    return (
        <AuthLayout>
            <h2 className="text-lg font-semibold text-brand-900 md:text-2xl">
                Join us to a more sustainable future!
            </h2>
            <div className="w-4/5 flex flex-col items-center md:h-3/5 md:px-24">
                <RegistrationForm />
            </div>
        </AuthLayout>
    );
};

export default Registration;
