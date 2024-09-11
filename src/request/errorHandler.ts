import codeMessage from "./codeMessage";
import { toast } from "react-toastify";

const errorHandler = (error) => {
    // For internet connection - Check if the user is online
    if (!navigator.onLine) {
        // Code to execute when there is internet connection
        toast.error("No internet connection", {
            data: {
                description: "Cannot connect to the Internet, Check your internet network",
            },
        });
        return {
            success: false,
            result: null,
            message: "Cannot connect to the server, Check your internet network",
        };
    }

    const { response } = error;

    if (!response) {
        // Code to execute when there is no internet connection
        toast.error("Problem connecting to server", {
            data: {
                description: "Cannot connect to the server, Try again later",
            },
        });
        return {
            success: false,
            result: null,
            message: "Cannot connect to the server, Contact your Account administrator",
        };
    }

    if (response && response.status) {
        const message = response.data.message;

        const errorText = message || codeMessage[response.status];
        const { status } = response;
        toast.error(`Request error ${status}`, { data: { description: errorText } });
        return response.data;
    } else {
        if (navigator.onLine) {
            // Code to execute when there is internet connection
            toast.error("Problem connecting to server", {
                data: {
                    description: "Cannot connect to the server, Try again later",
                },
            });
            return {
                success: false,
                result: null,
                message: "Cannot connect to the server, Contact your Account administrator",
            };
        } else {
            // Code to execute when there is no internet connection
            toast.error("No internet connection", {
                data: {
                    description: "Cannot connect to the Internet, Check your internet network",
                },
            });
            return {
                success: false,
                result: null,
                message: "Cannot connect to the server, Check your internet network",
            };
        }
    }
};

export default errorHandler;
