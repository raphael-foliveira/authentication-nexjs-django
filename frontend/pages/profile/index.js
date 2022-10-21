import Note from "../../components/Notes/Note";
import { useEffect, useState } from "react";
import { Button, CircularProgress } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { PaddedCard } from "../../components/UI/FormCard";
import styled from "@emotion/styled";
import { getUserFromToken, signOut } from "../../services/auth-services";
import { getUserNotes } from "../../services/note-services";
import { useLocalStorage } from "../../lib/hooks";

const Centralizer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    margin-top: 2rem;
`;

export default function UserProfileCard() {
    const router = useRouter();
    const [userInfo, setUserInfo] = useState();
    const [userNotes, setUserNotes] = useState([]);
    const token = useLocalStorage("token");
    const isLoggedIn = useLocalStorage("isLoggedIn");

    const hangleSignOut = () => {
        localStorage.clear();
        router.push("/");
    };

    useEffect(() => {
        if (token) {
            getUserFromToken(token).then((user) => setUserInfo(user));
            getUserNotes(token).then((notes) => setUserNotes(notes));
        }
    }, [token]);

    return (
        <PaddedCard>
            {!!userInfo ? (
                <>
                    <h1>
                        Welcome {userInfo.first_name} {userInfo.last_name}!
                    </h1>
                    <h3>Your Notes</h3>
                    <hr />
                    <>
                        {!!userNotes ? (
                            userNotes.map((note) => {
                                return <Note note={note} key={note.id} />;
                            })
                        ) : (
                            <Centralizer>
                                <CircularProgress style={{ alignSelf: "center" }} />
                            </Centralizer>
                        )}
                    </>
                    <Link href={`/profile/create-note`}>
                        <Button>Create new note</Button>
                    </Link>
                    <Button onClick={hangleSignOut}>Log Out</Button>
                </>
            ) : (
                <Centralizer>
                    <CircularProgress style={{ alignSelf: "center" }} />
                </Centralizer>
            )}
        </PaddedCard>
    );
}
