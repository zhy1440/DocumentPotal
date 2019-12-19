import * as types from "../actions/actionTypes";
import initialState from "./initialStates";

export default function userReducer(state = initialState.users, action) {
    switch (action.type) {
        case types.SET_USER:
            return action.users;
        default:
            return state;
    }
}
