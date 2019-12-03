import * as types from "../actions/actionTypes";
import initialState from "./initialStates";

export default function catReducer(state = initialState.cats, action) {
    switch (action.type) {
        case types.LOAD_CATS_SUCCESS:
            return action.cats;
        default:
            return state;
    }
}
