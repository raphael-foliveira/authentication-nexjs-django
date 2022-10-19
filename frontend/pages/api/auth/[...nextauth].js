import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
    pages: {
        signIn: "/login",
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "username", type: "text" },
                password: { label: "password", type: "password" },
            },
            async authorize(credentials, req) {
                const res = await fetch("http://localhost:8000/api/login/", {
                    method: "POST",
                    body: JSON.stringify(credentials),
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                const token = await res.json();
                console.log(token);
                return { name: token.token };
            },
        }),
    ],
};

export default NextAuth(authOptions);
