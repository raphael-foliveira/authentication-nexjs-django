import { CircularProgress } from "@mui/material";
import { Suspense } from "react";
import Note from "./Note";

export default function NotesList({ notes, user }) {
    return (
        <Suspense fallback={<CircularProgress />}>
            {notes.map((note) => (
                <Note noteInfo={note} user={user} key={note.id} />
            ))}
        </Suspense>
    );
}
