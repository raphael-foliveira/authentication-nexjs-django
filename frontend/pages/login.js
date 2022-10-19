import { getCsrfToken } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/router";
import FormCard from "../components/UI/FormCard";
import { FullWidthTextField } from "../components/UI/FullWidthTextField";
import { Button } from "@mui/material";

export async function getServerSideProps(context) {
    const csrftToken = await getCsrfToken(context);
    return {
        props: {
            csrfToken: csrftToken,
        },
    };
}

export default function Login({ csrfToken }) {
    return (
        <FormCard>
            <h1 style={{ textAlign: "center" }}>Login</h1>
            <form action="/api/auth/callback/credentials" method="POST">
                <input type="hidden" name="csrfToken" defaultValue={csrfToken} />
                <FullWidthTextField label="User Name" name="username" autoComplete="current-username" />
                <FullWidthTextField label="Password" name="password" type="password" autoComplete="current-password" />
                <Button variant="contained" type="submit">
                    Log in
                </Button>
            </form>
        </FormCard>
    );
}
