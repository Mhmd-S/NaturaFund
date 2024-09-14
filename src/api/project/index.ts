import { api } from "@config/axiosConfig";
import errorHandler from "@request/errorHandler";
import successHandler from "@request/successHandler";

export const getProjects = async (page: number) => {
    try {
        const response = await api.request({
            method: "GET",
            url: `project`,
            params: { page },
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

export const getProject = async (id: string) => {
    try {
        const response = await api.request({
            method: "GET",
            url: `project/${id}`,
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
