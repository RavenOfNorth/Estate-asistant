import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
    providers: [
        Providers.Credentials({
            name: "Credentials",
            credentials: {
                username: {label: "Username", type: "text"},
                password: {label: "Password", type: "password"}
            },
                async authorization(credentials) {
                const res = await fetch("/api/auth/login", {
                    method: "POST",
                    body: JSON.stringify(credentials),
                    headers: {"Content-Type": "application/json"}
                });

                const user = await res.json();

                if (res.ok && user) {
                    return user;
                }
                return null;
                }
        })
    ],
    pages: {
        signIn: '/api/auth/signin'
    }
})