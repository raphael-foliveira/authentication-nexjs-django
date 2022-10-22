import FormCard from "../components/UI/FormCard";
import { FullWidthTextField } from "../components/UI/FullWidthTextField";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useContext } from "react";
import { AuthContext } from "../lib/AuthProvider";
import { getCsrfToken } from "next-auth/react";

export default function Login({ csrfToken }) {
    const [formState, setFormState] = useState({
        username: "",
        password: "",
    });
    const router = useRouter();
    const { login, token, user, loading, isAuthenticated } = useContext(AuthContext);

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
            <form action="/api/auth/callback/credentials" method="POST">
                <input type="hidden" defaultValue={csrfToken} name="csrfToken"/>
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

export async function getServerSideProps(context) {
    return {
        props: {
            csrfToken: await getCsrfToken(context),
        }
    }
}