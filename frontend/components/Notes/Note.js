import { useEffect, useState } from "react"
import { getNoteAuthor } from "../../services/note-services";


export default function Note({note}) {
    const [author, setAuthor] = useState("");

    useEffect(() => {
        getNoteAuthor(note.author)
        .then(authorInfo => setAuthor(authorInfo))
    }, [])
    return (
        <>
        <h3>{note.title}</h3>
        <p>{note.content}</p>
        <p>Created at: {note.created_at} by {author.username}</p>
        <hr />
        </>
    )
}