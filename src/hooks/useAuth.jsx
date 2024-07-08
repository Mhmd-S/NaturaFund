import React from "react";
import { API_BASE_URL } from "@/config/serverApiConfig";
import axios from "axios";
import useNotification from "@/hooks/useNotification";
import { useAuthContext } from "@/context/AuthContext";

const useAuth = () => {
    const { handleSuccess, handleError } = useNotification();
    const { state, authContextAction } = useAuthContext();

    const login = async ({ loginData }) => {
        try {
            const response = await axios.post(
                API_BASE_URL + `login?timestamp=${new Date().getTime()}`,
                loginData
            );

            const { status, data } = response;

            handleSuccess(
                { data, status },
                {
                    notifyOnSuccess: false,
                    notifyOnFailed: true,
                }
            );
            return data;
        } catch (error) {
            return handleError(error);
        }
    };

    const register = async ({ registerData }) => {
        try {
            const response = await axios.post(API_BASE_URL + `register`, registerData);

            const { status, data } = response;

            handleSuccess(
                { data, status },
                {
                    notifyOnSuccess: true,
                    notifyOnFailed: true,
                }
            );
            return data;
        } catch (error) {
            return handleError(error);
        }
    };

    const verify = async ({ userId, emailToken }) => {
        try {
            const response = await axios.get(API_BASE_URL + `verify/${userId}/${emailToken}`);

            const { status, data } = response;

            handleSuccess(
                { data, status },
                {
                    notifyOnSuccess: true,
                    notifyOnFailed: true,
                }
            );
            return data;
        } catch (error) {
            return handleError(error);
        }
    };

    const resetPassword = async ({ resetPasswordData }) => {
        try {
            const response = await axios.post(API_BASE_URL + `resetpassword`, resetPasswordData);

            const { status, data } = response;

            handleSuccess(
                { data, status },
                {
                    notifyOnSuccess: true,
                    notifyOnFailed: true,
                }
            );
            return data;
        } catch (error) {
            return handleError(error);
        }
    };
    const logout = async () => {
        axios.defaults.withCredentials = true;
        try {
            // window.localStorage.clear();
            const response = await axios.post(
                API_BASE_URL + `logout?timestamp=${new Date().getTime()}`
            );
            const { status, data } = response;

            handleSuccess(
                { data, status },
                {
                    notifyOnSuccess: false,
                    notifyOnFailed: true,
                }
            );
            return data;
        } catch (error) {
            return handleError(error);
        }
    };
    return {login, logout, resetPassword, verify, register};
};

export default useAuth;
