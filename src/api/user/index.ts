import { api } from "@config/axiosConfig";
import errorHandler from "@request/errorHandler";
import successHandler from "@request/successHandler";

export const updateUser = async (id: string, updateData) => {
    try {
        const response = await api.request({
            method: "PUT",
            url: `user/${id}`,
            data: updateData,
        });

        const { status, data } = response;
        console.log(response);
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

