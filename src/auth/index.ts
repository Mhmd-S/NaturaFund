import { API_BASE_URL } from "@/config/serverApiConfig";

import axios from "axios";
import errorHandler from "@/request/errorHandler";
import successHandler from "@/request/successHandler";

type userType = "corporation" | "investor";

export interface loginDataType {
    email: string;
    password: string;
}

export interface registerDataType {
    email: string;
    password: string;
    userType: userType;
}

export interface verifyDataType {
    email: string;
    code: string;
}

export const login = async (loginData: loginDataType) => {
    try {
        const response = await axios.post(API_BASE_URL + `auth/login`, loginData);

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
        const response = await axios.post(API_BASE_URL + `auth/register`, registerData);

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
        const response = await axios.get(API_BASE_URL + `auth/verify`, {
            params: verifyData,
            paramsSerializer: (params) => {
                return new URLSearchParams(params).toString();
            },
        });

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

// export const resetPassword = async ({ resetPasswordData }) => {
//     try {
//         const response = await axios.post(API_BASE_URL + `auth/resetpassword`, resetPasswordData);

//         const { status, data } = response;

//         successHandler(
//             { data, status },
//             {
//                 notifyOnSuccess: true,
//                 notifyOnFailed: true,
//             }
//         );
//         return data;
//     } catch (error) {
//         return errorHandler(error);
//     }
// };

export const logout = async (userType: userType) => {
    axios.defaults.withCredentials = true;
    try {
        // window.localStorage.clear();
        const response = await axios.post(
            API_BASE_URL + `auth/logout?timestamp=${new Date().getTime()}`
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
