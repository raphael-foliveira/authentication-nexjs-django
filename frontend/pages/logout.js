import { getCsrfToken } from "next-auth/react";
import FormCard from "../components/UI/FormCard";
import { Button } from "@mui/material";

export default function Logout({ csrfToken }) {
    return (
        <FormCard>
            <form action="/api/auth/signout" method="POST">
                <Button variant="contained">Clique aqui para sair</Button>
            </form>
        </FormCard>
    );
}

export async function getServerSideProps(context) {
    const csrfToken = await getCsrfToken(context);
    return {
        props: {
            csrfToken,
        },
    };
}
