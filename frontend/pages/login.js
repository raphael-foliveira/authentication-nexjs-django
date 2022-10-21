import FormCard from "../components/UI/FormCard";
import { FullWidthTextField } from "../components/UI/FullWidthTextField";
import { Button } from "@mui/material";
import { authenticateUser } from "../services/auth-services";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
    const [formState, setFormState] = useState({
        username: "",
        password: "",
    });
    const [token, setToken] = useState();
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();
        authenticateUser(formState)
        .then(newToken => setToken(newToken));
    };

    const handleChange = (event) => {
        setFormState((prevState) => {
            return {
                ...prevState,
                [event.target.name]: event.target.value,
            };
        });
    };

    useEffect(() => {
        if (token) {
            router.push("/profile");
        }
    }, [token]);

    return (
        <FormCard>
            <h1 style={{ textAlign: "center" }}>Login</h1>
            <form action="" method="POST" onSubmit={handleSubmit}>
                <FullWidthTextField
                    label="User Name"
                    name="username"
                    autoComplete="current-username"
                    onChange={handleChange}
                />
                <FullWidthTextField
                    label="Password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    onChange={handleChange}
                />
                <Button variant="contained" type="submit">
                    Log in
                </Button>
            </form>
        </FormCard>
    );
}
