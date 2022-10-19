import "../styles/globals.css";
import { createTheme, ThemeProvider } from "@mui/material";
import styled from "@emotion/styled";
import { green, orange, grey } from "@mui/material/colors";
import { SessionProvider } from "next-auth/react";

const theme = createTheme({
    palette: {
        mode: "dark",
        primary: green,
        secondary: orange,
        background: grey,
    },
});

const BackGround = styled.div`
    background-color: black;
`;

function MyApp({ Component, pageProps: {session, ...pageProps} }) {
    return (
        <ThemeProvider theme={theme}>
            <SessionProvider session={session}>
                <Component {...pageProps} />
            </SessionProvider>
        </ThemeProvider>
    );
}

export default MyApp;
