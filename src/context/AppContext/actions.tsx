import * as actionTypes from "./types";

const contextActions = (dispatch) => {
    return {
        notification: {
            config: ({ duration, maxCount }) => {
                dispatch({ type: actionTypes.SET_CONFIG, payload: { duration, maxCount } });
            },
            success: ({ message, description }) => {
                dispatch({ type: actionTypes.SET_DURATION, payload: { message, description } });
            },
            error: ({ message, description }) => {
                dispatch({ type: actionTypes.SET_MESSAGE, payload: { message, description } });
            },
        },
    };
};

export default contextActions;
