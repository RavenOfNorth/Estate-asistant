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

            if (auth.currentUser) {
                router.refresh();
                router.push("/calculator");
            } else {
                setTimeout(() => {
                    console.log("🔄 Retrying redirect:", auth.currentUser);
                    router.push("/calculator");
                }, 1000);
            }
        } catch (error) {
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
