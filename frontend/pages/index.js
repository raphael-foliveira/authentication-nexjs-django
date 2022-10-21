import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Button } from "@mui/material";
import styled from "@emotion/styled";
import Link from "next/link";
import { PaddedCard } from "../components/UI/FormCard";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Centralizer = styled.div`
    width: 100%;
    min-height: 100px;
    display: flex;
    justify-content: space-between;
    .MuiButtonBase-root {
        margin: 50px;
    }
`;

export default function Home() {
    const router = useRouter();

    return (
        <div className={styles.container}>
            <Head>
                <title>Notes App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <PaddedCard>
                <h1>Welcome</h1>
                <Centralizer>
                    <Link href={"/login"}>
                        <Button variant="contained">
                            Login
                        </Button>
                    </Link>
                    <Link href="/register">
                        <Button variant="contained">Register</Button>
                    </Link>
                </Centralizer>
            </PaddedCard>
        </div>
    );
}
