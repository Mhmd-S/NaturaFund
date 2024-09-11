import * as actionTypes from "./types";
import * as authService from "@/auth";
import request from "@/request";

// actions.js

const contextActions = (dispatch) => {
    return {
        login: async (email, password, userType) => {
            dispatch({ type: actionTypes.LOADING_REQUEST });
            const data = await authService.login({ email, password }, userType);
            if (data.status == "success") {
                dispatch({ type: actionTypes.LOGIN_SUCCESS, payload: data.data });
            } else {
                dispatch({ type: actionTypes.FAILED_REQUEST, payload: data.message });
            }
        },
        register: async ({ registerData }) => {
            dispatch({ type: actionTypes.LOADING_REQUEST });
            const data = await authService.register({ registerData });
            if (data.status == "success") {
                dispatch({ type: actionTypes.REGISTER_SUCCESS });
            } else {
                dispatch({ type: actionTypes.FAILED_REQUEST, payload: data.message });
            }
        },
        verify: async ({ email, emailToken }) => {
            dispatch({ type: actionTypes.LOADING_REQUEST });
            const data = await authService.verify({ email, emailToken });
            if (data.status == "success") {
                dispatch({ type: actionTypes.REQUEST_SUCCESS, payload: data.data });
            } else {
                dispatch({ type: actionTypes.FAILED_REQUEST, payload: data.message });
            }
        },
        // resetPassword: async ({ resetPasswordData }) => {
        //     dispatch({ type: actionTypes.LOADING_REQUEST });
        //     const data = await authService.resetPassword({ resetPasswordData });
        //     if (data.status == "success") {
        //         dispatch({ type: actionTypes.REQUEST_SUCCESS, payload: data.data });
        //     } else {
        //         dispatch({ type: actionTypes.FAILED_REQUEST });
        //     }
        // },
        logout: async () => {
            const data = await authService.logout();
            if (data.status == "success") {
                dispatch({ type: actionTypes.LOGOUT_FAILED, payload: data.data });
            } else {
                dispatch({ type: actionTypes.LOGOUT_SUCCESS });
            }
        },
        // updateProfile: async ({ entity, jsonData }) => {
        //     const data = await request.updateAndUpload({ entity, id: "", jsonData });
        //     if (data.status == "success") {
        //         dispatch({ type: actionTypes.REQUEST_SUCCESS, payload: data.data });
        //     }
        // },
    };
};

export default contextActions;
