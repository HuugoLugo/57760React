import { useState } from 'react';
import styles from './ItemCount.module.css';

const ItemCount = ({ initial, stock }) => {

    console.log(initial)

    const [count, setCount] = useState(initial)

    const decrement = () => {
        if (count > initial) {
            setCount(count - 1)
        }
    }

    const increment = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    return (
        <div className={styles.countCont}>
            <button onClick={decrement}>-</button>
            <span className={styles.count}>{count}</span>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default ItemCount;