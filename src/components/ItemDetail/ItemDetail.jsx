import styles from './ItemDetail.module.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ product }) => {
    return (
        <div className={styles.itemDetail}>
            <div className={styles.divider}>
                <h3>{product.name}</h3>
                <img className={styles.imgSize} src={product.image}></img>
                <p>Precio: {product.price}</p>
            </div>
            <div className={styles.divider}>
                <p>Categoria: {product.category}</p>
                <p>Descripción: {product.description}</p>
                <p>Stock: {product.stock}</p>
                <ItemCount initial={1} stock={product.stock} />
                <button>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemDetail;