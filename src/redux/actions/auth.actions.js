import axios from "../../api/axios";
import { authConstants } from "./constant";
import { errorAlert, handleErrorMessage } from 'Utils';

export const login = (user) => {
  //check this part
  return async (dispatch) => {
    dispatch({ type: authConstants.LOGIN_REQUEST });
    try {
      const res = await axios.post("/v1/users/login", {
        ...user,
      });
      if (res.status === 200) {
        const { token, user } = res.data;
        window.localStorage.setItem("sqtoken", token);
        window.localStorage.setItem("squser", JSON.stringify(user));
        dispatch({
          type: authConstants.LOGIN_SUCCESS,
          payload: {
            token,
            user,
          },
        });
      }
    } catch (error) {
      dispatch({
        type: authConstants.LOGIN_FAILURE,
        payload: { error: "INVALID CREDENTIALS" },
      });
    }

  };
};

export const isUserLoggedIn = () => {
  return async (dispatch) => {
    const token = window.localStorage.getItem("sqtoken");

    if (token) {
      const user = JSON.parse(window.localStorage.getItem("squser"));
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });
    } else {
      dispatch({
        type: authConstants.LOGIN_FAILURE,
        // payload: { error: "Need to login" },
      });
    }
  };
};
export const resetPassword = (username, url) => {
  return async (dispatch) => {
    dispatch({
      type: authConstants.RESET_PASSWORD_REQUEST,
    });
    try {
      if (username) {
        await axios.post(`/v1/projects/{projectId}/users/${username}/reset-password-request?redirectUrl=${url}`);
        dispatch({
          type: authConstants.RESET_PASSWORD_SUCCESS,
          // payload: { error: "Need to login" },
        });
      }
    } catch (error) {
      dispatch({
        type: authConstants.RESET_PASSWORD_FAILURE,
        // payload: { error: "Need to login" },
      });
    }
  };
};

export const signout = () => {
  return async (dispatch) => {
    window.localStorage.removeItem("sqtoken");
    window.localStorage.removeItem("squser");
    dispatch({
      type: authConstants.LOGOUT_SUCCESS,
      payload: "Success"
    });

  };
};

export const pageMove = () => {
  return (dispatch) => {
    dispatch({
      type: authConstants.CLEAR__ERROR,
    });
  };
};

export const handleRemoveSuccessFromForgetPass = (email, url) => {
  //check this part
  return async (dispatch) => {
    try {
      dispatch({
        type: authConstants.REMOVE_SUCCESS_FROM_FORGET_PASS,
      });
    } catch (error) {
      errorAlert(handleErrorMessage(error));
    }
  };
};

// export const signout = () => {
//   return async (dispatch) => {
//     dispatch({
//       type: authConstants.LOGOUT_REQUEST,
//     });

//     try {
//       const res = await axios.get("/v1/users/logout");
//       if (res.status === 200) {
//         window.localStorage.removeItem("sqtoken");
//         window.localStorage.removeItem("squser");
//         dispatch({
//           type: authConstants.LOGOUT_SUCCESS,
//           payload: res.data
//         });
//       } else {
//         dispatch({
//           type: authConstants.LOGOUT_FAILURE,
//           payload: { error: res.data.error },
//         });
//       }
//     } catch (error) {
//       console.log("signout error", error);
//     }

//   };
// };

