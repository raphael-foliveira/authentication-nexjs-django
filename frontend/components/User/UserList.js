import { useState, useEffect } from "react";
import UserCard from "./UserCard";

export default function UserList() {
    const [allUsers, setAllUsers] = useState([]);

    const getUsers = async () => {
        console.log(process.env.REACT_APP_API_URL);
        let response = await fetch(`http://127.0.0.1:8000/api/users`);
        let users = await response.json();
        return users;
    };

    useEffect(() => {
        getUsers().then((users) => setAllUsers(users));
        console.log(allUsers);
    }, []);

    if (allUsers.length === 0) {
        return <h1>Nothing here yet</h1>;
    }

    return (
        <>
            <h1>Users</h1>
            {allUsers.map((user) => (
                <UserCard user={user} />
            ))}
        </>
    );
}
