import react, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import { useAuthContext } from "@/context/AuthContext";

const useVerifyEmail = ({ setCurrentStep, email }) => {
    const [generalError, setGeneralError] = useState("");

    const { state, authContextAction } = useAuthContext();

    const { isLoading, isSuccess } = state;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        if (isSuccess) setCurrentStep(1);
    }, [isSuccess, isLoading]);

    const onSubmit = (data) => {
        // Todo
        authContextAction.verifyEmail(data);
    };

    return {
        onSubmit,
        handleSubmit,
        register,
        isLoading,
        generalError,
        errors,
    };
};

export default useVerifyEmail;
