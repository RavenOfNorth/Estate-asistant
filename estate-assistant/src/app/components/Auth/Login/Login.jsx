import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../../../../lib/auth/db";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log("User signed in:", userCredential.user);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <form onSubmit={handleSignIn}>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Sign In</button>
            {error && <p>{error}</p>}
        </form>
    );
}
