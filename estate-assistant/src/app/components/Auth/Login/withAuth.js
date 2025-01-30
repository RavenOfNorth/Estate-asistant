"use client"

import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../../../../../lib/auth/db";

const withAuth = (WrappedComponent) => {
    return function ProtectedRoute(props) {
        const router = useRouter();
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, (user) => {
                if (!user) {
                    router.push("/login"); // Если НЕ авторизован — редирект
                }
                setLoading(false);
            });

            return () => unsubscribe();
        }, []);

        if (loading) return <p>Loading...</p>; // Можно заменить на лоадер

        return <WrappedComponent {...props} />;
    };
};


export default withAuth;