import FormCard from "../components/UI/FormCard";
import { Button } from "@mui/material";

export default function Logout() {
    return (
        <FormCard>
            <form action="/api/auth/signout" method="POST">
                <Button variant="contained">Clique aqui para sair</Button>
            </form>
        </FormCard>
    );
}
