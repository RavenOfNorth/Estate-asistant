import styles from './Welcome.module.css'

export default function Welcome() {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <h1 className={styles.greeting}>Welcome!</h1>
                <p>Thank you for your interest in the app. We'll be launching very soon</p>
                <div className={styles.buttonWrapper}>
                </div>
            </div>
        </div>
    )
}