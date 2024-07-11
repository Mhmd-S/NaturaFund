import React from "react";
import RegistrationModule from "@/modules/RegistrationModule";
import AuthPage from "@/components/AuthPage";

const index = () => {
    return (
        <AuthPage>
            <h2 className="text-lg font-semibold text-brand-900 md:text-2xl">
                Join us to a more sustainable future!
            </h2>
            <RegistrationModule />
        </AuthPage>
    );
};

export default index;
