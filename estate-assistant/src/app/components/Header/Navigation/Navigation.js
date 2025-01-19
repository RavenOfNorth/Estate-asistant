import styles from './Navigation.module.css'

export default function HeaderNavigation() {
    return (
        <nav className={styles.headerNavigation}>
            <ul className={styles.navigation}>
                <li className={styles.navigationItem}><a href="#">Main</a></li>
                <li className={styles.navigationItem}><a href="#">Calculator</a></li>
                <li className={styles.navigationItem}><a href="#">Contact us</a></li>
            </ul>
        </nav>
    )
}