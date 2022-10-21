import { useEffect, useContext, Suspense } from "react";
import { AuthContext } from "../../lib/AuthProvider";
import { useRouter } from "next/router";
import { CircularProgress } from "@mui/material";
import { Centralizer } from "../UI/Centralizer";

export default function RequireAuth({ children }) {
    const { isAuthenticated, loading } = useContext(AuthContext);
    const router = useRouter();
    useEffect(() => {
        if (!isAuthenticated && !loading) {
            router.push("/login");
        }
    }, [loading]);

    if (loading || !isAuthenticated) {
        return (
            <Centralizer>
                <CircularProgress />;
            </Centralizer>
        );
    } else {
        return <>{children}</>;
    }
}
