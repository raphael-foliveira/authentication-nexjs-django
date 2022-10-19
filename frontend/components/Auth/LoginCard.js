import { useState } from "react";
import { useRouter } from "next/router";
import { Button } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { FullWidthTextField } from "../UI/FullWidthTextField";
import FormCard from "../UI/FormCard";
import { loginUser, getUserFromToken } from "../../services/auth-services";

export default function LoginCard() {
    const [formState, setFormState] = useState({
        username: "",
        password: "",
    });
    const router = useRouter();

    const handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        setFormState((previousState) => {
            return {
                ...previousState,
                [name]: value,
            };
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        router.push("/profile")   
    }

    return (
        <FormCard>
            <h1 style={{ textAlign: "center" }}>Login</h1>
            <form action="" method="post" onSubmit={handleSubmit}>
                <Grid2 container spacing={2}>
                    <Grid2 xs={12}>
                        <FullWidthTextField
                            label="User Name"
                            name="username"
                            autoComplete="current-username"
                            onChange={handleChange}
                        />
                    </Grid2>
                    <Grid2 xs={12}>
                        <FullWidthTextField
                            label="Password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            onChange={handleChange}
                        />
                    </Grid2>
                    <Grid2 xs={12}>
                        <Button variant="contained" type="submit">
                            Log in
                        </Button>
                    </Grid2>
                </Grid2>
            </form>
        </FormCard>
    );
}
