import { useMemo, useReducer, createContext, useContext, useEffect } from "react";
import { initialState, contextReducer } from "./reducer";
import contextActions from "./actions";
import * as authService from "@api/auth";
import * as actionTypes from "./types";
import Cookies from "js-cookie";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
    const [state, dispatch] = useReducer(contextReducer, initialState);
    const value = useMemo(() => [state, dispatch], [state]);

    useEffect(() => {
        dispatch({ type: actionTypes.LOADING_REQUEST });

        authService.getUser().then((data) => {
            if (data.status === "success") {
                
                if (data.data.suspended) {
                    authService.logout().then((data) => {
                        if (data.status === "success") {
                            Cookies.remove("connect.sid").then(() => {
                                dispatch({ type: actionTypes.LOGOUT_SUCCESS });
                                window.location.reload();
                            });
                        }
                    });
                }

                dispatch({ type: actionTypes.LOGIN_SUCCESS, payload: data.data });
                return;
            }

            dispatch({ type: actionTypes.FAILED_REQUEST });
        });
    }, []);

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuthContext() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuthContext must be used within a AuthContextProvider");
    }
    const [state, dispatch] = context;
    const authContextAction = contextActions(dispatch);
    return { state, authContextAction };
}

export { AuthContextProvider, useAuthContext };
