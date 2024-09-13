import react, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuthContext } from "@/context/AuthContext";

type formDataType = {
    email: string;
    password: string;
    userType: "investor" | "corporation";
};

export const useEmailForm = ({ setCurrentStep, setEmail }) => {
    const { state, authContextAction } = useAuthContext();

    const { isLoading, isSuccess, error } = state;

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const watchPassword = watch("password");
    
    useEffect(() => {
        if (isSuccess) setCurrentStep(1);
    }, [isSuccess, isLoading]);

    const onSubmit = (data: formDataType) => {
        setEmail(data.email);
        authContextAction.register(data);
    };

    return {
        register,
        onSubmit,
        handleSubmit,
        isLoading,
        authError: error,
        watchPassword,
        errors,
    };
};
