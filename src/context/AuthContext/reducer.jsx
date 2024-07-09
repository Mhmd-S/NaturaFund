import * as actionTypes from './types';

export const initialState = {
  current: {},
  isLoggedIn: false,
  isLoading: false,
  isSuccess: false,
};

export const contextReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_LOADING:
      return {
        ...state,
        isLoggedIn: false,
        isLoading: true,
      };
    case actionTypes.REQUEST_FAILED:
      return initialState;

    case actionTypes.REQUEST_SUCCESS:
      return {
        current: action.payload,
        isLoggedIn: true,
        isLoading: false,
        isSuccess: true,
      };

    case actionTypes.REGISTER_SUCCESS:
      return {
        current: null,
        isLoggedIn: false,
        isLoading: false,
        isSuccess: true,
      };
    case actionTypes.LOGOUT_SUCCESS:
      return initialState;

    case actionTypes.LOGOUT_FAILED:
      return {
        current: action.payload,
        isLoggedIn: true,
        isLoading: false,
        isSuccess: true,
      };

    default:
      return state;
  }
};

export default contextReducer;