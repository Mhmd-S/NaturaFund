import { api } from "@config/axiosConfig";
import errorHandler from "@request/errorHandler";
import successHandler from "@request/successHandler";

export interface investmentDataType {
    amount: string;
    projectId: string;
    userId: string;
    userType: string;
}

export const createInvestment = async (investmentData: investmentDataType) => {
    try {
        const response = await api.request({
            method: "POST",
            url: `investment`,
            data: investmentData,
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

export const getInvestmentsByInvestor = async (userId: string) => {
    try {
        const response = await api.request({
            method: "GET",
            url: `investment/investor/${userId}`,
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

export const getInvestmentsByProject = async (projectId: string) => {
    try {
        const response = await api.request({
            method: "GET",
            url: `investment/project/${projectId}`,
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
