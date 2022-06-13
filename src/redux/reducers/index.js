import { combineReducers } from "redux";
import authReducer from "./auth.reducers";
import userReducer from "./user.reducer";
import { authConstants } from "../actions/constant";


const appReducer = combineReducers({
  auth: authReducer,
  user: userReducer,

});
const rootReducer = (state, action) => {
  if (action.type === authConstants.LOGOUT_SUCCESS) {
    state = undefined;
  }
  return appReducer(state, action);
};
export default rootReducer;
