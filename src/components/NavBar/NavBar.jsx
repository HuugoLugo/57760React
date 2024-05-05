import CartWidget from '../CartWidget/CartWidget';
import styles from './NavBar.module.css';

function NavBar() {
    return (
        <nav className={styles.navigator}>
            <div className={styles.categoriesCont}>
                <ul className={styles.categories}>
                    <li>Panadería</li>
                    <li>Pastelería</li>
                    <li>Otros</li>
                </ul></div>
            <div className={styles.pageTitle}><h1>Panadería Nancy</h1></div>
            <CartWidget />
        </nav>
    )
}

export default NavBar;