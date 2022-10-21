import Note from "../../components/Notes/Note";
import { Suspense, useEffect, useState } from "react";
import { Button, CircularProgress } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { PaddedCard } from "../../components/UI/FormCard";
import styled from "@emotion/styled";
import { getUserNotes } from "../../services/note-services";
import { useContext } from "react";
import { AuthContext } from "../../lib/AuthProvider";
import RequireAuth from "../../components/Auth/ProtectedPage";
import NotesList from "../../components/Notes/NotesList";

const Centralizer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    margin-top: 2rem;
`;

export default function UserProfileCard() {
    const router = useRouter();
    const { token, logout, user, loading, setLoading } = useContext(AuthContext);
    const [userNotes, setUserNotes] = useState([]);

    const handleSignOut = () => {
        logout();
        setLoading(true);
        router.push("/");
    };

    useEffect(() => {
        getUserNotes(token).then((notes) => setUserNotes(notes));
    }, [loading]);

    if (loading) {
        return (
            <Centralizer>
                <CircularProgress />
            </Centralizer>
        );
    }

    return (
        <RequireAuth>
            <PaddedCard>
                <>
                    <h1>
                        Welcome {user.first_name} {user.last_name}!
                    </h1>
                    <h3>Your Notes</h3>
                    <hr />
                    {userNotes.length > 0 && <NotesList notes={userNotes} />}
                    <Link href={`/profile/create-note`}>
                        <Button>Create new note</Button>
                    </Link>
                    <Button onClick={handleSignOut}>Log Out</Button>
                </>
            </PaddedCard>
        </RequireAuth>
    );
}
