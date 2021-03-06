export const authConstants = {
  LOGIN_REQUEST: "LOGIN_REQUEST",
  LOGIN_FAILURE: "LOGIN_FAILURE",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGOUT_REQUEST: "LOGOUT_REQUEST",
  LOGOUT_SUCCESS: "LOGOUT_SUCCESS",
  LOGOUT_FAILURE: "LOGOUT_FAILURE",
  CLEAR__ERROR: "CLEAR__ERROR",
  RESET_PASSWORD_REQUEST: "RESET_PASSWORD_REQUEST",
  RESET_PASSWORD_SUCCESS: "RESET_PASSWORD_SUCCESS",
  RESET_PASSWORD_FAILURE: "RESET_PASSWORD_FAILURE",
  REMOVE_SUCCESS_FROM_FORGET_PASS: "REMOVE_SUCCESS_FROM_FORGET_PASS",
};

export const userConstants = {
  USER_REGISTER_REQUEST: "USER_REGISTER_REQUEST",
  USER_REGISTER_SUCCESS: "USER_REGISTER_SUCCESS",
  USER_REGISTER_FAILURE: "USER_REGISTER_FAILURE",
  ACTIVATION_REQUEST: "ACTIVATION_REQUEST",
  ACTIVATION__SUCCESS: "ACTIVATION__SUCCESS",
  ACTIVATION_FAILURE: "ACTIVATION_FAILURE",
  ACTIVATION_USER_REQUEST: "ACTIVATION_USER_REQUEST",
  ACTIVATION_USER__SUCCESS: "ACTIVATION_USER__SUCCESS",
  ACTIVATION_USER_FAILURE: "ACTIVATION_USER_FAILURE",
  RESEND_ACTIVATION: "RESEND_ACTIVATION",
  REMOVE_SUCCESS_FROM_SIGNUP: "REMOVE_SUCCESS_FROM_SIGNUP",
  
};
export const paymentConstants = {
  USER_ADD: "USER_ADD",
  USER_UPDATE: "USER_UPDATE",
  USER_DELETE: "USER_DELETE",
  USER_EMPTY: "USER_EMPTY",
  DISABLE_FALSE: "DISABLE_FALSE",
  SAVE_SUBSCRIPTIONS_REQUEST: "SAVE_SUBSCRIPTIONS_REQUEST",
  SAVE_SUBSCRIPTIONS_SUCCESS: "SAVE_SUBSCRIPTIONS_SUCCESS",
  SAVE_SUBSCRIPTIONS_STRIPE_SUCCESS: "SAVE_SUBSCRIPTIONS_STRIPE_SUCCESS",
  STRIPE_SUCCESS_MODAL_CLOSE: "STRIPE_SUCCESS_MODAL_CLOSE",
  SAVE_SUBSCRIPTIONS_STRIPE_FAILURE: "SAVE_SUBSCRIPTIONS_STRIPE_FAILURE",
  SAVE_SUBSCRIPTIONS_STRIPE_REQUEST: "SAVE_SUBSCRIPTIONS_STRIPE_REQUEST",
  SAVE_SUBSCRIPTIONS_FAILURE: "SAVE_SUBSCRIPTIONS_FAILURE",
  GET_ALL_SUBSCRIPTIONS: "GET_ALL_SUBSCRIPTIONS",
  GET_SINGLE_SUBSCRIPTION: "GET_SINGLE_SUBSCRIPTION",
};

export const ProfileConstants = {
  PROFILE_REQUEST: "PROFILE_REQUEST",
  PROFILE_AVATAR_REQUEST: "PROFILE_AVATAR_REQUEST",
  PROFILE_AVATAR_SUCCESS: "PROFILE_AVATAR_SUCCESS",
  PROFILE_SUCCESS: "PROFILE_SUCCESS",
  GET_PROFILE_REQUEST: "GET_PROFILE_REQUEST",
  DELETE_USER_REQUEST: "DELETE_USER_REQUEST",
  DELETE_USER_SUCCESS: "DELETE_USER_SUCCESS",
  DELETE_USER_FAILURE: "DELETE_USER_FAILURE",
  GET_PROFILE_SUCCESS: "GET_PROFILE_SUCCESS",
  GET_PROFILE_FAILURE: "GET_PROFILE_FAILURE",
  ORGANIZATION_PROFILE_SUCCESS: "ORGANIZATION_PROFILE_SUCCESS",
  ORGANIZATION_PROFILE_REQUEST: "ORGANIZATION_PROFILE_REQUEST",
  ORGANIZATION_PROFILE_FAILURE: "ORGANIZATION_PROFILE_FAILURE",
  USER_PASSWORD_SUCCESS: "USER_PASSWORD_SUCCESS",
  USER_PASSWORD_REQUEST: "USER_PASSWORD_REQUEST",
  USER_PASSWORD_FAILURE: "USER_PASSWORD_FAILURE",
  PROFILE_NAME: "PROFILE_NAME",
};
export const ProjectConstants = {
  PROJECT_CREATE_REQUEST: "PROJECT_CREATE_REQUEST",
  PROJECT_CREATE_SUCCESS: "PROJECT_CREATE_SUCCESS",
  PROJECT_CREATE_FAILURE: "PROJECT_CREATE_FAILURE",
  PROJECT_UPDATE: "PROJECT_UPDATE",
  PROJECT_GET: "PROJECT_GET",
  ALL_PROJECTS_GET: "ALL_PROJECTS_GET",
};

export const diagramConstant = {
  ADDEDGE: "ADDEDGE",
  DELETE_CSV: "DELETE_CSV",
  ADD_VALUE_STREAM: "ADD_VALUE_STREAM",
  DELETE_VALUE_STREAM: "DELETE_VALUE_STREAM",
  UPDATE_VALUE_STREAM: "UPDATE_VALUE_STREAM",
  GET_VALUE_STREAM: "GET_VALUE_STREAM",
  ADD_NEW_PERSONA: "ADD_NEW_PERSONA",
  GET_PERSONA_DATA: "GET_PERSONA_DATA",
  UPDATE_PERSONA_DATA: "UPDATE_PERSONA_DATA",
  ADD_NEW_ELEMENT: "ADD_NEW_ELEMENT",
  LOADDATA: "LOADDATA",
  LOAD_TABLE_DATA_FROM_BACKEND: 'LOAD_TABLE_DATA_FROM_BACKEND',
  ADD_NEW_FORM_NODE_DATA: 'ADD_NEW_FORM_NODE_DATA',
  CLOSE_FORM_NODE_DATA: 'CLOSE_FORM_NODE_DATA',
  UPDATE_NEW_FORM_NODE_DATA: 'UPDATE_NEW_FORM_NODE_DATA',
  DELETE_NEW_FORM_NODE_DATA: 'DELETE_NEW_FORM_NODE_DATA',
  FOR_CSV_WITH_VALUE_STREAM: 'FOR_CSV_WITH_VALUE_STREAM',
};
export const kanbanConstant = {
  GENERATE_KANBAN: "GENERATE_KANBAN",
  GET_ALL_LANE_SUCCESS: "GET_ALL_LANE_SUCCESS",
  GET_ALL_KANBAN_SUCCESS: "GET_ALL_KANBAN_SUCCESS",
  GET_SINGLE_KANBAN_SUCCESS: "GET_SINGLE_KANBAN_SUCCESS",
  DELETE_SINGLE_KANBAN_SUCCESS: "DELETE_SINGLE_KANBAN_SUCCESS",
  UPDATE_SINGLE_KANBAN_SUCCESS: "UPDATE_SINGLE_KANBAN_SUCCESS",
  UPDATE_LANE_DRAG: "UPDATE_LANE_DRAG",
  ADD_NEW_KANBAN_EMPTY: "ADD_NEW_KANBAN_EMPTY",
  UPDATE_KANBAN_CARD: "UPDATE_KANBAN_CARD",
  ADD_KANBAN_LANE: "ADD_KANBAN_LANE",
  UPDATE_KANBAN_LANE: "UPDATE_KANBAN_LANE",
  DELETE_KANBAN_LANE: "DELETE_KANBAN_LANE",
  DOCUMENT_DELETE_REQUEST: "DOCUMENT_DELETE_REQUEST",
  DOCUMENT_DELETE_SUCCESS: "DOCUMENT_DELETE_SUCCESS",
  ADD_ESTIMATE_TIME: "ADD_ESTIMATE_TIME",
  GET_USERS_LANE_SUCCESS: "GET_USERS_LANE_SUCCESS"
};

export const websocketConstant = {
  REF_CONNECT: 'REF_CONNECT',
  SENDMESSAGE: 'SENDMESSAGE',
  ONCONNECT: 'ONCONNECT',
  DISCONNECT: 'DISCONNECT',
}

export const logHour = {
  FETCH_LOG_HOURS_REQUEST: "FETCH_LOG_HOURS_REQUEST",
  FETCH_LOG_HOURS_SUCCESS: "FETCH_LOG_HOURS_SUCCESS",
  FETCH_LOG_HOURS_FAILED: "FETCH_LOG_HOURS_FAILED",
  ADD_LOG_HOUR: "ADD_LOG_HOUR",
  FETCH_LOG_HOUR_REQUEST: "FETCH_LOG_HOUR_REQUEST",
  FETCH_LOG_HOUR_SUCCESS: "FETCH_LOG_HOUR_SUCCESS",
  FETCH_LOG_HOUR_FAILED: "FETCH_LOG_HOUR_FAILED",
  UPDATE_LOG_HOUR_SUCCESS: "UPDATE_LOG_HOUR_SUCCESS",
  UPDATE_LOG_HOUR_FAILED: "UPDATE_LOG_HOUR_FAILED",
  DELETE_LOG_HOUR_SUCCESS: "DELETE_LOG_HOUR_SUCCESS",
  DELETE_LOG_HOUR_FAILED: "DELETE_LOG_HOUR_FAILED",
  FIND_LOG_HOUR_BYCARD_REQUEST: "FIND_LOG_HOUR_BYCARD_REQUEST",
  FIND_LOG_HOUR_BYCARD_SUCCESS: "FIND_LOG_HOUR_BYCARD_SUCCESS",
  FIND_LOG_HOUR_BYCARD_FAILED: "FIND_LOG_HOUR_BYCARD_FAILED",
}

export const logEnable = {
  FETCH_ENABLE_LOGHOUR_REQUEST: "FETCH_ENABLE_LOGHOUR_REQUEST",
  FETCH_ENABLE_LOGHOUR_SUCCESS: "FETCH_ENABLE_LOGHOUR_SUCCESS",
  FETCH_ENABLE_LOGHOUR_FAILED: "FETCH_ENABLE_LOGHOUR_FAILED",
  UPDATE_LOGHOUR_ENABLE_SUCCESS: "UPDATE_LOGHOUR_ENABLE_SUCCESS",
  UPDATE_LOGHOUR_ENABLE_FAILED: "UPDATE_LOGHOUR_ENABLE_FAILED",
}