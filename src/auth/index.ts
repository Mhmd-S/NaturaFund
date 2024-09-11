import { API_BASE_URL } from "@/config/serverApiConfig";

import axios from "axios";
import errorHandler from "@/request/errorHandler";
import successHandler from "@/request/successHandler";

type userType = "corporation" | "investor";

type loginDataType = {
    email: string;
    password: string;
};

type registerDataType = {
    email: string;
    password: string;
    userType: userType;
};

type verifyDataType = {
    email: string;
    token: string;
};

export const login = async (loginData: loginDataType, userType: userType) => {
    try {
        const response = await axios.post(API_BASE_URL + `${userType}/login`, loginData);

        const { status, data } = response;

        successHandler(
            { data, status },
            {
                notifyOnSuccess: false,
                notifyOnFailed: true,
            }
        );
        return data;
    } catch (error) {
        return errorHandler(error);
    }
};

export const register = async (registerData: registerDataType) => {
    try {
        const response = await axios.post(API_BASE_URL + `registration/register`, registerData);

        const { status, data } = response;

        successHandler(
            { data, status },
            {
                notifyOnSuccess: true,
                notifyOnFailed: true,
            }
        );
        return data;
    } catch (error) {
        return errorHandler(error);
    }
};

export const verify = async (verifyData: verifyDataType) => {
    try {
        const response = await axios.get(API_BASE_URL + `registration/verify`, verifyData);

        const { status, data } = response;

        successHandler(
            { data, status },
            {
                notifyOnSuccess: true,
                notifyOnFailed: true,
            }
        );
        return data;
    } catch (error) {
        return errorHandler(error);
    }
};

export const resetPassword = async ({ resetPasswordData }) => {
    try {
        const response = await axios.post(API_BASE_URL + `resetpassword`, resetPasswordData);

        const { status, data } = response;

        successHandler(
            { data, status },
            {
                notifyOnSuccess: true,
                notifyOnFailed: true,
            }
        );
        return data;
    } catch (error) {
        return errorHandler(error);
    }
};
export const logout = async (userType: userType) => {
    axios.defaults.withCredentials = true;
    try {
        // window.localStorage.clear();
        const response = await axios.post(
            API_BASE_URL + `${userType}/logout?timestamp=${new Date().getTime()}`
        );
        const { status, data } = response;

        successHandler(
            { data, status },
            {
                notifyOnSuccess: false,
                notifyOnFailed: true,
            }
        );
        return data;
    } catch (error) {
        return errorHandler(error);
    }
};
