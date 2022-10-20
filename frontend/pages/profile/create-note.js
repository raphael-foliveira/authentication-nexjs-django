import { useState } from "react";
import FormCard from "../../components/UI/FormCard";
import { TextField, Button } from "@mui/material";
import {createNote} from "../../services/note-services"
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

export default function CreateNote() {
    const [formState, setFormState] = useState({
        title: "",
        content: "",
    });

    const router = useRouter();
    const session = useSession();

    const changeHandler = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        setFormState((previousState) => {
            return {
                ...previousState,
                [name]: value
            }
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        createNote(formState, session.data.user.name).then(response => router.push(`/profile`));
    }

    return (
        <FormCard>
            <form action="" method="POST" onSubmit={submitHandler}>
                <TextField name="title" label="Note Title" onChange={changeHandler}/>
                <TextField name="content" label="Note" onChange={changeHandler} multiline rows={6}/>
                <Button type="submit">Save</Button>
            </form>
        </FormCard>
    )
}