import React from "react";
import useRegistration from "@/components/Registration/hooks/useRegistration";

const RegistrationModule = () => {
    const { renderRegistration } = useRegistration();

    return (
        <div className="w-4/5 flex flex-col items-center md:h-3/5 md:px-24">
            {renderRegistration()}
        </div>
    );
};

export default RegistrationModule;
