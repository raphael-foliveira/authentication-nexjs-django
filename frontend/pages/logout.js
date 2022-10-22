import FormCard from "../components/UI/FormCard";
import { Button } from "@mui/material";
import { getCsrfToken } from "next-auth/react";
import { useEffect } from "react";

export default function Logout(csrfToken) {
    return (
        <FormCard>
            <form action="/api/auth/signout" method="POST" id="signOutForm">
                <input type="hidden" defaultValue={csrfToken} name="csrfToken" />
                <button onLoad={this.form.submit()}></button>
            </form>
        </FormCard>
    );
}

export async function getServerSideProps(context) {
    return {
        props: {
            csrfToken: await getCsrfToken(context)
        }
    }
}
