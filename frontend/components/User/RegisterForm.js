import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { registerUser } from "../../services/auth-services";
import { useRouter } from "next/router";
import styled from "@emotion/styled";

const FlexDiv = styled.div`
    display: flex;
    justify-content: space-around;
`


export default function RegisterForm() {
    const [formState, setFormState] = useState({
        first_name: "",
        last_name: "",
        email: "",
        username: "",
        password: "",
        confirm_password: "",
    });

    const router = useRouter();

    const handleChange = event => {
        let name = event.target.name;
        let value = event.target.value;
        setFormState((prevState) => {
            return {
                ...prevState,
                [name]: value
            }
        });
    }

    const handleSubmit = event => {
        event.preventDefault();
        registerUser(formState).then(data => console.log(data));
        router.push("/login");
    }

    return (
        <form action="" method="post" onSubmit={handleSubmit}>
            <TextField label="First Name" name="first_name" onChange={handleChange} />
            <TextField label="Last Name" name="last_name" onChange={handleChange} />
            <TextField label="E-Mail" type="email" name="email" onChange={handleChange} />
            <TextField label="User Name" name="username" onChange={handleChange} />
            <TextField label="Password" type="password" name="password" onChange={handleChange} />
            <TextField label="Confirm Password" type="password" name="confirm_password" onChange={handleChange} />
            <FlexDiv>
                <Button variant="contained" type="submit">Register</Button>
            </FlexDiv>
        </form>
    )
}