import react, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import { useAuthContext } from "@context/AuthContext";

import { verifyDataType } from "@api/auth";

const useVerifyEmail = ({ setCurrentStep, email }) => {
    const { state, authContextAction } = useAuthContext();

    const { isLoading, isSuccess, error } = state;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data: verifyDataType) => {
        data.email = email;
        authContextAction.verify(data);

        if (isSuccess) setCurrentStep(2);
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
