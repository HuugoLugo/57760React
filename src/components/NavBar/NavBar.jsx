import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
    return (
        <nav className={styles.navigator}>
            <div className={styles.categoriesCont}>
                <ul className={styles.categories}>
                    <li><Link to={'/category/Panaderia'}>Panadería</Link></li>
                    <li><Link to={'/category/Pasteleria'}>Pastelería</Link></li>
                    <li><Link to={'/category/Extras'}>Extras</Link></li>
                </ul></div>
            <div className={styles.pageTitle}><h1><Link to={"/"}>Panadería Nancy</Link></h1></div>
            <CartWidget />
        </nav>
    )
}

export default NavBar;