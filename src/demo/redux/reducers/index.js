import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import todos from "./todos";
import cats from "./catReducer";
import users from "./userReducer";

export default combineReducers({ todos, visibilityFilter, cats, users });
