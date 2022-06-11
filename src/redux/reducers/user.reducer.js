import { userConstants } from "../actions/constant";

const initState = {
  error: false,
  message: "",
  loading: false,
  success: false,
  activation: false,
  userActivation: false

};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case userConstants.USER_REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
        success: false
      };
    case userConstants.USER_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
        success: true
      };
    case userConstants.ACTIVATION__SUCCESS:
      return {
        ...state,
        activation: true
      };
    case userConstants.REMOVE_SUCCESS_FROM_SIGNUP:
      return {
        ...state,
        success: false
      };
    case userConstants.ACTIVATION_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case userConstants.ACTIVATION_USER__SUCCESS:
      return {
        ...state,
        loading: false,
        userActivation: true
      };
    case userConstants.USER_REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        success: false
      };
    default:
      return state;
  }
};
export default userReducer;
