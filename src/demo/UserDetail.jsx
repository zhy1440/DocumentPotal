import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";

export default function UserDetail({match}) {
    useEffect(() => {
        console.log(match)
        fetchUser(match.params.id);
    }, [match]);

    const [user, setUser] = useState({});
    const fetchUser = async (id) => {
        const data = await fetch("https://jsonplaceholder.typicode.com/users/"+id);
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
