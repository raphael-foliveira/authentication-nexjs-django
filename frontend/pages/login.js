import FormCard from "../components/UI/FormCard";
import { FullWidthTextField } from "../components/UI/FullWidthTextField";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useContext } from "react";
import { AuthContext } from "../lib/AuthProvider";
import { signIn } from "next-auth/react";

export default function Login() {
    const [formState, setFormState] = useState({
        username: "",
        password: "",
    });
    const router = useRouter();
    const { login, token, user, loading, isAuthenticated } = useContext(AuthContext);

    const handleSubmit = async (event) => {
        event.preventDefault();
        login(formState);
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
        if (!loading && isAuthenticated) {
            router.push("/profile");
        }
    }, [isAuthenticated]);

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
