import styles from './Header.module.css'
import logo from '../assets/foguete.svg'

export function Header () {
    return(
        <header className={styles.header}>
            <img src={logo} alt="logo" />
            <strong className={styles.logo}>to<span>do</span></strong>
        </header>
        
    )
}