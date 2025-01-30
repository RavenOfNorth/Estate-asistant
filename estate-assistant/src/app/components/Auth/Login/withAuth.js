"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../../../lib/auth/db";

const withAuth = (WrappedComponent) => {
    return function ProtectedRoute(props) {
        const router = useRouter();
        const [loading, setLoading] = useState(true);
        const [isAuthenticated, setIsAuthenticated] = useState(false);

        useEffect(() => {
            console.log("🔄 Checking auth state...");
            const unsubscribe = onAuthStateChanged(auth, (user) => {
                console.log("👤 Auth state changed:", user);
                if (user) {
                    setIsAuthenticated(true);
                } else {
                    router.push("/login");
                }
                setLoading(false);
            });

            return () => unsubscribe();
        }, [router]);

        if (loading) return <p>Loading...</p>;

        if (!isAuthenticated) {
            console.log("🔴 User not authenticated, returning null.");
            return null;
        }

        console.log("✅ User authenticated, rendering component.");
        return <WrappedComponent {...props} />;
    };
};

export default withAuth;
