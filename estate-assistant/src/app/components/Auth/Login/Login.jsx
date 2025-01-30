"use client"

import styles from './Login.module.css';
import { useState } from "react";
import {useRouter} from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../../lib/auth/db";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const router = useRouter();

    const handleSignIn = async (e) => {
        e.preventDefault();
        setError("");

        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("✅ User signed in:", auth.currentUser);

            if (auth.currentUser) {
                router.refresh(); // ✅ Принудительное обновление страницы
                router.push("/calculator");
            } else {
                console.log("⚠️ User is null after login, waiting 1 sec...");
                setTimeout(() => {
                    console.log("🔄 Retrying redirect:", auth.currentUser);
                    router.push("/calculator");
                }, 1000);
            }
        } catch (error) {
            console.error("❌ Login error:", error);
            setError(error.message);
        }
    };

    return (
        <form onSubmit={handleSignIn} className={styles.form}>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.input}
            />
            <button type="submit" className={styles.button}>Sign In</button>
            {error && <p className={styles.error}>{error}</p>}
        </form>
    );
}
