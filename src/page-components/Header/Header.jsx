import reactLogo from "../../assets/reactLogo.png"
import styles from './Header.module.css'

function Header() {
    return(
        <header>
            <div className={styles.logo}>
                <div className={styles.logoContainer}>
                    <img src={reactLogo} />
                </div>
                <h2 className={styles.logoText}><span>CKINTS</span> React</h2>
            </div>

            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header