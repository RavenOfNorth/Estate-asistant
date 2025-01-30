import HeaderNavigation from "@/app/components/Header/Navigation/Navigation";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}><a href="/">SmartEstate</a></div>
            <HeaderNavigation />
        </header>
    );
}
