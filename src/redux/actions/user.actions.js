import { getOrganizationProfile } from '.';
import axios from "../../api/axios";
import { errorAlert, successAlert, handleErrorMessage } from 'Utils';
import { userConstants, paymentConstants } from "./constant";
import store from '../store';

export const signup = (user) => {
  //check this part

  console.log(user)
  return async (dispatch) => {
    dispatch({ type: userConstants.USER_REGISTER_REQUEST });
    try {
      const res = await axios.post("/v1/projects/{projectId}/users", {
        ...user,
      });
      if (res.status === 201 && res.data?.data?.roleType === "USER") {
        successAlert("User created successfully! Please Notify the member to check the email")
        dispatch({
          type: userConstants.USER_REGISTER_SUCCESS,
          payload: res.data.message
        });
        store.dispatch({
          type: paymentConstants.USER_EMPTY,
        })
        dispatch(getOrganizationProfile(user?.projectId))
      }
      if (user.roleType === "ADMIN") {
        dispatch({
          type: userConstants.USER_REGISTER_SUCCESS,
          payload: res.data.message
        });
        dispatch(getOrganizationProfile(user?.projectId))
      }

    } catch (error) {
      dispatch({
        type: userConstants.USER_REGISTER_FAILURE,
      });
      errorAlert(handleErrorMessage(error));
    }
  };
};
export const activationUser = (secretKey) => {
  //check this part
  return async (dispatch) => {
    dispatch({ type: userConstants.ACTIVATION_REQUEST });
    try {
      const res = await axios.patch(`/v1/projects/{projectId}/users/activeUser/${secretKey}`);
      console.log("from activation users", { res })
      if (res.status === 200) {
        dispatch({
          type: userConstants.ACTIVATION__SUCCESS,
        });

      }

    } catch (error) {
      dispatch({
        type: userConstants.ACTIVATION_FAILURE,
      });
      errorAlert(handleErrorMessage(error));
    }
  };
};

export const resendActivationUser = (email, url) => {
  //check this part
  return async (dispatch) => {
    try {
      const res = await axios.patch(`/v1/projects/{projectId}/users/resend/email/${email}?redirectUrl=${url}`);
      if (res.status === 200) {
        dispatch({
          type: userConstants.RESEND_ACTIVATION,
        });

      }

    } catch (error) {
      errorAlert(handleErrorMessage(error));
    }
  };
};
export const handleRemoveSuccessFromSignup = (email, url) => {
  //check this part
  return async (dispatch) => {
    try {
      dispatch({
        type: userConstants.REMOVE_SUCCESS_FROM_SIGNUP,
      });

    } catch (error) {
      errorAlert(handleErrorMessage(error));
    }
  };
};



export const activationUserByAdmin = (secretKey, password) => {
  //check this part
  return async (dispatch) => {
    dispatch({ type: userConstants.ACTIVATION_USER_REQUEST });
    try {
      const res = await axios.patch(`/v1/projects/{projectId}/users/reset-password/${secretKey}?password=${password}`);
      console.log("from activation from users", { res })
      if (res.status === 200) {
        dispatch({
          type: userConstants.ACTIVATION_USER__SUCCESS,
        });
      }

    } catch (error) {
      dispatch({
        type: userConstants.ACTIVATION_USER_FAILURE,
      });
      errorAlert(handleErrorMessage(error));
    }
  };
};
