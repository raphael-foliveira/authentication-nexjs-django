

export default function UserCard({ user }) {
    return (
        <>
            <h1>{user.first_name} {user.last_name}</h1>
            <ul>
                <li>{user.username}</li>
                <li>{user.user_since}</li>
            </ul>
        </>
    )
}