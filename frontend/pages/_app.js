import "../styles/globals.css";
import { createTheme, ThemeProvider } from "@mui/material";
import styled from "@emotion/styled";
import { green, orange, grey } from "@mui/material/colors";
import { AuthProvider } from "../lib/AuthProvider";

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

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <AuthProvider>
                <Component {...pageProps} />
            </AuthProvider>
        </ThemeProvider>
    );
}

export default MyApp;
