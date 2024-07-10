import react, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuthContext } from "@/context/AuthContext";

export const useEmailForm = ({ setCurrentStep, setEmail }) => {
    const { state, authContextAction } = useAuthContext();

    const { isLoading, isSuccess } = state;

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const watchPassword = watch("password");

    const [generalError, setGeneralError] = useState("");

    useEffect(() => {
        if (isSuccess) setCurrentStep(1);
    }, [isSuccess, isLoading]);

    const onSubmit = (data) => {
        authContextAction.register(data);
    };

    return {
        register,
        onSubmit,
        handleSubmit,
        isLoading,
        generalError,
        watchPassword,
        errors,
    };
};
