import { useEffect } from "react";
import Note from "../components/Notes/Note";
import { getAllNotes } from "../services/note-services";


export default function AllNotes({ notes }) {
    return (
        <>
        <h1>All notes</h1>
        {notes.map(note => <Note note={note} key={note.id} />)}
        </>
    )
}

export async function getServerSideProps(context) {
    const allNotes = await getAllNotes();
    return {
        props: {
            notes: allNotes,
        }
    }
}