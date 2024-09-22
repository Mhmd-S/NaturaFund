import react, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import { useAuthContext } from "@context/AuthContext";

import { verifyDataType } from "@api/auth";

const useVerifyEmail = ({ setCurrentStep, email }) => {
    const { state, authContextAction } = useAuthContext();

    const { isLoading, isSuccess, error } = state;

    useEffect(() => {
        if (isSuccess && !isLoading && isDirty) setCurrentStep(2);
    }, [isSuccess, isLoading]);

    const {
        register,
        handleSubmit,
        formState: { errors, isDirty },
    } = useForm();

    const onSubmit = async(data: verifyDataType) => {
        data.email = email;
        await authContextAction.verify(data);
    };

    return {
        onSubmit,
        handleSubmit,
        register,
        isLoading,
        authError: error,
        errors,
    };
};

export default useVerifyEmail;
