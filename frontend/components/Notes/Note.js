import { useEffect, useState } from "react"
import { getNoteAuthor } from "../../services/note-services";
import { Button } from "@mui/material";
import { useLocalStorage } from "../../lib/hooks";
import { deleteNote } from "../../services/note-services";
import { useRouter } from "next/router";

export default function Note({note}) {
    const [author, setAuthor] = useState("");
    const user = useLocalStorage("user");

    const handleDeleteNote = (event) => {
        deleteNote(note.id, localStorage.getItem("token"));
        location.reload();
    }

    useEffect(() => {
        getNoteAuthor(note.author)
        .then(authorInfo => setAuthor(authorInfo));
        console.log(user);
    }, []);

    return (
        <>
        <h3>{note.title}</h3>
        <p>{note.content}</p>
        <p>Created at: {note.created_at} by {author.username}</p>
        {user.username === author.username &&
            <Button variant="contained" color="warning" onClick={handleDeleteNote}>Delete note</Button>}
        <hr />
        </>
    )
}