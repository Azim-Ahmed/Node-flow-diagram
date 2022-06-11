import { combineReducers } from "redux";
import authReducer from "./auth.reducers";
import userReducer from "./user.reducer";
import diagramReducer from "./diagram.reducer";
import socketReducer from "./websocket.reducer";
import Orgprofile from "./profile.reducer";
import projectReducer from "./project.reducer";
import { authConstants } from "../actions/constant";
import kanbanReducer from './kanban.reducer';
import paymentReducer from './payment.reducer';
import logHourReducer from "./loghour.reducer";
import logEnableReducer from "./logenable.reducer";

const appReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  diagram: diagramReducer,
  socket: socketReducer,
  payment: paymentReducer,
  orgprofile: Orgprofile,
  projects: projectReducer,
  kanban: kanbanReducer,
  loghour: logHourReducer,
  logenable: logEnableReducer,
});

const rootReducer = (state, action) => {
  // when a logout action is dispatched it will reset redux state
  if (action.type === authConstants.LOGOUT_SUCCESS) {
    state = undefined;
  }
  return appReducer(state, action);
};
// const rootReducer = combineReducers({
//   auth: authReducer,
//   user: userReducer,
//   diagram: diagramReducer,
//   socket: websocketConstant,
//   orgprofile: Orgprofile,
//   projects: projectReducer,
// });
export default rootReducer;
