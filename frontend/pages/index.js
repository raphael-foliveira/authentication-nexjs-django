import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Button } from "@mui/material";
import styled from "@emotion/styled";
import Link from "next/link";
import { PaddedCard } from "../components/UI/FormCard";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Centralizer = styled.div`
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
    min-height: 100px;
    text-align: center;
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

                <Centralizer>
                <h1>Welcome</h1>
                    <Link href={"/login"}>
                        <Button variant="contained">
                            Login
                        </Button>
                    </Link>
                    <Link href="/register">
                        <Button variant="contained">Register</Button>
                    </Link>
                </Centralizer>
        </div>
    );
}
