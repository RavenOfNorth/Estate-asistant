import styles from './Navigation.module.css'

import Link from "next/link";

export default function HeaderNavigation() {
    return (
        <nav className={styles.headerNavigation}>
            <ul className={styles.navigation}>
                <li className={styles.navigationItem}><Link href="/">Updates</Link></li>
                <li className={styles.navigationItem}><Link href="/calculator">Calculator</Link></li>
                <li className={styles.navigationItem}><Link href="/feedback">Contact us</Link></li>
            </ul>
        </nav>
    )
}