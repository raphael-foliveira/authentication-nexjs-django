import Note from "../components/Notes/Note";
import { getAllNotes } from "../services/note-services";
import { PaddedCard } from "../components/UI/FormCard";
import RequireAuth from "../components/Auth/ProtectedPage";
import { useState } from "react";

export default function AllNotes({notes}) {
    return (
        <RequireAuth>
            <PaddedCard>
                <h1>All notes</h1>
                {notes.map((note) => (
                    <Note noteInfo={note} key={note.id} />
                ))}
            </PaddedCard>
        </RequireAuth>
    );
}

export async function getServerSideProps(context) {
    const allNotes = await getAllNotes();
    return {
        props: {
            notes: allNotes,
        },
    };
}
