import { createStore, combineReducers, applyMiddleware } from "redux";
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  noteCreateReducer,
  noteDeleteReducer,
  noteListReducer,
  noteUpdateReducer,
} from "./reducers/notesReducers";
const reducers = combineReducers({
  // this will contain some reducers
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  noteList: noteListReducer,
  noteCreate: noteCreateReducer,
  noteUpdate: noteUpdateReducer,
  noteDelete: noteDeleteReducer,
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
