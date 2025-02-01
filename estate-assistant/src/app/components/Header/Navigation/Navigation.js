"use client"

import styles from './Navigation.module.css'

import Link from "next/link";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import {signOut} from "firebase/auth";
import {auth} from "../../../../../lib/auth/db";

export default function HeaderNavigation() {
    const router = useRouter();

    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
        });
        return () => {
            unsubscribe();
        }
    }, []);

    const logOutHandler = async () => {
        await signOut(auth);
        setUser(null);
        router.push("/login");
    }

    return (
        <nav className={styles.headerNavigation}>
            {user ? (
                <ul className={styles.navigation}>
                    {/*<li className={styles.navigationItem}><Link href="/updates">Updates</Link></li> TODO: work in progress*/}
                    <li className={styles.navigationItem}><Link href="/calculator">Calculator</Link></li>
                    {/*<li className={styles.navigationItem}><Link href="/feedback">Contact us</Link></li> TODO: work in progress*/}
                    {/*<li className={styles.navigationItem} onClick={logOutHandler}><Link href="/login">Logout</Link></li> TODO: work in progress*/}
                    // TODO: Create user's page in feature and protect it by withAuth func
                </ul>
            ) : (
                <ul className={styles.navigation}>
                    {/*<li className={styles.navigationItem}><Link href="/updates">Updates</Link></li> // TODO: work in progress*/}
                    <li className={styles.navigationItem}><Link href="/calculator">Calculator</Link></li>
                    {/*<li className={styles.navigationItem}><Link href="/feedback">Contact us</Link></li> // TODO: work in progress*/}
                    {/*<li className={styles.navigationItem}><Link href="/login">Login</Link></li> // TODO: work in progress*/}
                </ul>
            )}
        </nav>
    )
}
