import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getToken } from "../../../services/auth-services";
import { getUserFromToken } from "../../../services/auth-services";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", name: "username" },
                password: { label: "Password", type: "password", name: "password" },
            },
            async authorize(credentials, req) {
                const token = await getToken(credentials);
                const user = await getUserFromToken(token);
                if (token) {
                    user.token = token;
                    return user;
                }
                return null;
            },
        }),
    ],
    callbacks: {
        async signIn({ user, account, metadata }) {
            return true;
        },
        async jwt({ token, user }) {
            if (user) {
                token.token = user.token;
            }
            return token;
        },
        async session({ session, token }) {
            session.token = token.token;
            return session;
        },
    },
};

export default NextAuth(authOptions);
