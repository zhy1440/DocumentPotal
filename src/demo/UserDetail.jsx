import React, { useState, useEffect, Fragment } from "react";
import { Link, useParams } from "react-router-dom";

export default function UserDetail() {
    const { id } = useParams();
    console.log("id", id);
    useEffect(() => {
        fetchUser(id);
    }, []);

    const [user, setUser] = useState({});
    const fetchUser = async (id) => {
        const data = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
        const user = await data.json();
        console.log(user);

        setUser(user);
    };

    return (
        <Fragment>
            <h1>{user.name}</h1>
        </Fragment>
    );
}
