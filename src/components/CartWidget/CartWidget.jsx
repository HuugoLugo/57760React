import styles from './CartWidget.module.css';
/*import cartImage from '.../assets/cart.png';
<img src={cartImage} />
Busqué como colocar la imagen, y no lo conseguí, no sé que hacía mal*/

function CartWidget() {
    return (
        <div className={styles.cartIcon}>Carrito
            <p>o</p>
        </div>
    )
}

export default CartWidget;