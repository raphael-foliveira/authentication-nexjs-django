import { useEffect, useContext, Suspense } from "react";
import { AuthContext } from "../../lib/AuthProvider";
import { useRouter } from "next/router";
import { CircularProgress } from "@mui/material";
import { Centralizer } from "../UI/Centralizer";

export default function RequireAuth({ children }) {
    const { isAuthenticated, loading, user } = useContext(AuthContext);
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.push("/");
        }
    }, [loading]);

    if (loading || !isAuthenticated) {
        return (
            <Centralizer>
                <CircularProgress />;
            </Centralizer>
        );
    }
    return <>{children}</>;
}
