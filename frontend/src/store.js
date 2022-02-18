import { createStore, combineReducers, applyMiddleware } from "redux";
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
const reducers = combineReducers({
  // this will contain some reducers
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const intialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducers,
  intialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
