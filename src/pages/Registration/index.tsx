import React from "react";

import RegistrationForm from "@forms/RegistrationForm";

import AuthLayout from "@components/common/AuthLayout";

const Registration = () => {
    return (
        <AuthLayout>
            <div className="w-4/5 flex flex-col items-center md:px-24">
                <RegistrationForm />
            </div>
        </AuthLayout>
    );
};

export default Registration;
