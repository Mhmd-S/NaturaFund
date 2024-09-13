import { api } from "@/config/axiosConfig";
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
        const response = await api.request({
            method: "POST",
            url: `auth/login`,
            data: loginData,
        });

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

export const getUser = async () => {
    try {
        const response = await api.request({
            method: "GET",
            url: `auth/user`,
        });
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
        const response = await api.request({
            method: "GET",
            url: `auth/verify`,
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

export const logout = async () => {
    axios.defaults.withCredentials = true;
    try {
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
