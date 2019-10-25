import React, { useState, useEffect, Fragment } from "react";
import {Link} from 'react-router-dom'
export default function Users() {
    useEffect(() => {
        fetchUsers();
    }, []);

    const [users, setUsers] = useState([]);
    
    const fetchUsers = async () => {
        const data = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await data.json();
        console.log(users);

        setUsers(users);
    };

    return (
        <Fragment>
            <h1>Users</h1>
            {users.map((user) => (
                <h5 key={user.id}>
                    <Link to={`/users/${user.id}`}>{user.name}</Link>
                </h5>
            ))}
        </Fragment>
    );
}
