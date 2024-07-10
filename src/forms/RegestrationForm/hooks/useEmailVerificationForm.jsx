import { useState } from "react";

import { useForm } from "react-hook-form";

const useVerifyEmail = () => {
    const [generalError, setGeneralError] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const onSubmit = (data) => {
        handleVerifyCode(data);
    };

    const handleVerifyCode = async (data) => {
        setLoading(true);
        const response = await userAPI.verifyCode(userInfo.email, data.code);
        setLoading(false);

        if (response.data.status === "success") {
            userAPI.registerUser(userInfo.email, userInfo.password).then(() => {
                goNextStage();
            });
        } else {
            console.log(response);
            setGeneralError(response.data.message?.code || response.data.message);
        }
    };

    return {
        onSubmit,
        handleSubmit,
        register,
        loading,
        generalError,
        errors,
    };
};

export default useVerifyEmail;
