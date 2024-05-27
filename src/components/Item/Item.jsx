import { Link } from 'react-router-dom';
import styles from './Item.module.css';

function Item({ product }) {
    return (
        <div className={styles.cartItem}>
            <h3>{product.name}</h3>
            <img className={styles.imgSize} src={product.image}></img>
            <p>{product.category}</p>
            <button><Link to={`/item/${product.id}`}>Ver más</Link></button>
        </div>
    )
}

export default Item;