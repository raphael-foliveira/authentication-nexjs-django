import Note from "../Notes/Note";
import { useEffect, useState } from "react";
import { Button, CircularProgress } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { PaddedCard } from "../UI/FormCard";
import styled from "@emotion/styled";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { getUserFromToken } from "../../services/auth-services";
import { getUserNotes } from "../../services/note-services";

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
    const session = useSession();

    useEffect(() => {
        if (session.status === "authenticated") {
            let token = session.data.user.name;
            getUserFromToken(token).then((user) => setUserInfo(user));
            getUserNotes(token).then((notes) => setUserNotes(notes));
        }
    }, [session]);

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
                    <Button onClick={() => signOut({ callbackUrl: "/" })}>Log Out</Button>
                </>
            ) : (
                <Centralizer>
                    <CircularProgress style={{ alignSelf: "center" }} />
                </Centralizer>
            )}
        </PaddedCard>
    );
}
