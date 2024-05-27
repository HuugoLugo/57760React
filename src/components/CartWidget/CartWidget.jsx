import styles from './CartWidget.module.css';
import cartImage from '../../assets/cart.png';

function CartWidget() {
    return (
        <div className={styles.cartCont}>
            <p><img src={cartImage} />1</p>
        </div>
    )
}

export default CartWidget;