import { useState } from "react";
import FormCard from "../../components/UI/FormCard";
import { TextField, Button } from "@mui/material";
import {createNote} from "../../services/note-services"
import { useRouter } from "next/router";
import { useLocalStorage } from "../../lib/hooks";

export default function CreateNote() {
    const [formState, setFormState] = useState({
        title: "",
        content: "",
    });
    const token = useLocalStorage("token");

    const router = useRouter();

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
        createNote(formState, token).then(response => router.push(`/profile`));
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