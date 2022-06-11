import { authConstants } from "../actions/constant";

const initState = {
  token: null,
  user: {
    firstName: "",
    lastName: "",
    email: "",
    picture: "",
  },
  authenticate: false,
  authenticating: false,
  loading: false,
  error: "",
  sendEmail: false,
  message: "",
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      return {
        ...state,
        authenticating: true,
        error: "",
      };
    case authConstants.CLEAR__ERROR:
      return {
        state: {
          ...state,
          error: ""
        },
      };
    case authConstants.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        authenticate: true,
        authenticating: false,
        error: "",
        message: "Login success"
      };
    case authConstants.RESET_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true
      };
    case authConstants.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        sendEmail: true

      };
    case authConstants.LOGIN_FAILURE:
      return {
        state: {
          ...state,
          error: action?.payload?.error
        },
      };

    case authConstants.LOGOUT_REQUEST:
      return {
        state: {
          ...state,
          loading: true,
        },
      };
    case authConstants.LOGOUT_SUCCESS:
      return {
        state: {
          ...initState
        },
      };

    case authConstants.LOGOUT_FAILURE:
      return {
        state: {
          ...state,
          error: action.payload.error,
          loading: false,
        },
      };
    case authConstants.REMOVE_SUCCESS_FROM_FORGET_PASS:
      return {
        ...state,
        sendEmail: false
      }
    default:
      return state;
  }
};
export default authReducer;
