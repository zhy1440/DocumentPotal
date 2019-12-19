import { SET_USER } from "./actionTypes";
import { getAllUsers } from "../api/userService";

export const fetchUsers = () => {
    console.log("fetchUsers called")
    return (dispatch) =>
        getAllUsers()
            .then((users) => {
                dispatch(setUsers(users));
            })
            .catch((error) => {
                throw error;
            });
};

export function setUsers(users) {
    return { type: SET_USER, users };
}
