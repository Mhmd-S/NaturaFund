import * as actionTypes from "./types";
import * as authService from "@/auth";
import request from "@/request";

// actions.js

const contextActions = (dispatch) => {
    return {
        notification: {
            config: ({ duration, maxCount }) => {
                dispatch({ type: actionTypes.SET_CONFIG, payload: { duration, maxCount } });
            },
            success: ({ message, description }) => {
                dispatch({
                    type: actionTypes.SET_SUCCESS_NOTIFICATION,
                    payload: { message, description },
                });
            },
            error: ({ message, description }) => {
                dispatch({
                    type: actionTypes.SET_ERROR_NOTIFICATION,
                    payload: { message, description },
                });
            },
        },
        login: async ({ loginData }) => {
            dispatch({ type: actionTypes.REQUEST_LOADING });
            const data = await authService.login({ loginData });
            if (data.success) {
                const auth_state = {
                    current: data.result,
                    isLoggedIn: true,
                    isLoading: false,
                    isSuccess: true,
                };
                window.localStorage.setItem("auth", JSON.stringify(auth_state));
                window.localStorage.removeItem("isLogout");
                dispatch({ type: actionTypes.REQUEST_SUCCESS, payload: data.result });
            } else {
                dispatch({ type: actionTypes.REQUEST_FAILED });
            }
        },
        register: async ({ registerData }) => {
            dispatch({ type: actionTypes.REQUEST_LOADING });
            const data = await authService.register({ registerData });
            if (data.success) {
                dispatch({ type: actionTypes.REGISTER_SUCCESS });
            } else {
                dispatch({ type: actionTypes.REQUEST_FAILED });
            }
        },
        verify: async ({ userId, emailToken }) => {
            dispatch({ type: actionTypes.REQUEST_LOADING });
            const data = await authService.verify({ userId, emailToken });
            if (data.success) {
                const auth_state = {
                    current: data.result,
                    isLoggedIn: true,
                    isLoading: false,
                    isSuccess: true,
                };
                window.localStorage.setItem("auth", JSON.stringify(auth_state));
                window.localStorage.removeItem("isLogout");
                dispatch({ type: actionTypes.REQUEST_SUCCESS, payload: data.result });
            } else {
                dispatch({ type: actionTypes.REQUEST_FAILED });
            }
        },
        resetPassword: async ({ resetPasswordData }) => {
            dispatch({ type: actionTypes.REQUEST_LOADING });
            const data = await authService.resetPassword({ resetPasswordData });
            if (data.success) {
                const auth_state = {
                    current: data.result,
                    isLoggedIn: true,
                    isLoading: false,
                    isSuccess: true,
                };
                window.localStorage.setItem("auth", JSON.stringify(auth_state));
                window.localStorage.removeItem("isLogout");
                dispatch({ type: actionTypes.REQUEST_SUCCESS, payload: data.result });
            } else {
                dispatch({ type: actionTypes.REQUEST_FAILED });
            }
        },
        logout: async () => {
            dispatch({ type: actionTypes.LOGOUT_SUCCESS });
            const result = window.localStorage.getItem("auth");
            const tmpAuth = JSON.parse(result);
            const settings = window.localStorage.getItem("settings");
            const tmpSettings = JSON.parse(settings);
            window.localStorage.removeItem("auth");
            window.localStorage.removeItem("settings");
            window.localStorage.setItem("isLogout", JSON.stringify({ isLogout: true }));
            const data = await authService.logout();
            if (!data.success) {
                const auth_state = {
                    current: tmpAuth,
                    isLoggedIn: true,
                    isLoading: false,
                    isSuccess: true,
                };
                window.localStorage.setItem("auth", JSON.stringify(auth_state));
                window.localStorage.setItem("settings", JSON.stringify(tmpSettings));
                window.localStorage.removeItem("isLogout");
                dispatch({ type: actionTypes.LOGOUT_FAILED, payload: data.result });
            } else {
                // on logout success
            }
        },
        updateProfile: async ({ entity, jsonData }) => {
            const data = await request.updateAndUpload({ entity, id: "", jsonData });
            if (data.success) {
                dispatch({ type: actionTypes.REQUEST_SUCCESS, payload: data.result });
                const auth_state = {
                    current: data.result,
                    isLoggedIn: true,
                    isLoading: false,
                    isSuccess: true,
                };
                window.localStorage.setItem("auth", JSON.stringify(auth_state));
            }
        },
    };
};

export default contextActions;
