import { useEffect, useState } from "react";
import { Button, CircularProgress } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { getUserNotes } from "../../services/note-services";
import { PaddedCard } from "../../components/UI/FormCard";
import styled from "@emotion/styled";
import NotesList from "../../components/Notes/NotesList";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { getUserFromToken } from "../../services/auth-services";

const Centralizer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    margin-top: 2rem;
`;

export default function UserProfileCard() {
    const router = useRouter();
    const session = useSession();
    const [userNotes, setUserNotes] = useState([]);
    const [user, setUser] = useState({});

    const handleSignOut = () => {
        signOut({ callbackUrl: "/" });
    };

    useEffect(() => {
        if (session.status === "authenticated") {
            getUserNotes(session.data.token).then((notes) => setUserNotes(notes));
            getUserFromToken(session.data.token).then((userInfo) => setUser(userInfo));
        }
    }, [session]);

    return (
        <PaddedCard>
            <>
                {!!user && (
                    <h1>
                        Welcome {user.first_name} {user.last_name}!
                    </h1>
                )}
                <h3>Your Notes</h3>
                <hr />
                {userNotes.length > 0 && <NotesList notes={userNotes} user={user} />}
                <Link href={`/profile/create-note`}>
                    <Button>Create new note</Button>
                </Link>
                <Button onClick={handleSignOut}>Log Out</Button>
            </>
        </PaddedCard>
    );
}
