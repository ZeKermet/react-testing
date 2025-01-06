import reactLogo from "../../assets/reactLogo.png"
import styles from './Header.module.css'
import { NavLink } from 'react-router-dom'


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
                    <li><NavLink to="/react-testing/">Home</NavLink></li>
                    <li><NavLink to="*">Services</NavLink></li>
                    <li><NavLink to="/react-testing/about">About</NavLink></li>
                    <li><NavLink to="/react-testing/contact">Contact</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header