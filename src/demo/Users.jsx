import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import useSWR, { SWRConfig } from "swr";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./redux/actions/userActions";
import { Button } from "react-bootstrap";
// import fetch from 'unfetch'

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Users() {
    const dispatch = useDispatch();
    // const { data: users } = useSWR("https://jsonplaceholder.typicode.com/users", fetcher, {
    //     suspense: true
    // });
    const [users, setUsers] = useState([]);
    const userList = useSelector((state) => state.users);
    console.log("userList", userList);
    useEffect(() => {
        dispatch(fetchUsers());
        setUsers(userList);
    }, []);

    // const fetchUsers = () => {
    //     // console.log("users", users);
    //     // const { data: projects } = useSWR('/api/projects')
    //     // const { data: user } = useSWR('/api/user', { refreshInterval: 0 }) // don't refresh
    //     // const data = await fetch("https://jsonplaceholder.typicode.com/users");
    //     // const users = await data.json();
    //     // console.log(users);

    //     // setUsers(users);
    // };
    const handleClick = () => {
        dispatch(fetchUsers());
    };
    return (
        <Fragment>
            <h1>Users</h1>
            <Button onClick={handleClick}>click me</Button>
            {users.map((user) => (
                <h5 key={user.id}>
                    <Link to={`/users/${user.id}`}>{user.name}</Link>
                </h5>
            ))}
        </Fragment>
    );
}
