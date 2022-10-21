import { useEffect, useState } from "react"
import { getNoteAuthor } from "../../services/note-services";
import { Button } from "@mui/material";
import { useLocalStorage } from "../../lib/hooks";
import { deleteNote } from "../../services/note-services";
import { useRouter } from "next/router";

export default function Note({noteInfo}) {
    const [author, setAuthor] = useState("");
    const user = useLocalStorage("user");

    const handleDeleteNote = (event) => {
        deleteNote(noteInfo.id, localStorage.getItem("token"));
        location.reload();
    }

    useEffect(() => {
        getNoteAuthor(noteInfo.author)
        .then(authorInfo => setAuthor(authorInfo));
        console.log(user);
    }, []);

    return (
        <>
        <h3>{noteInfo.title}</h3>
        <p>{noteInfo.content}</p>
        <p>Created at: {noteInfo.created_at} by {author.username}</p>
        {user.username === author.username &&
            <Button variant="contained" color="warning" onClick={handleDeleteNote}>Delete note</Button>}
        <hr />
        </>
    )
}