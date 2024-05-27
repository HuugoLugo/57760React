import { useState, useEffect } from 'react';
import styles from './Count.module.css';

function Count() {

    const [contador, setContador] = useState(0)

    useEffect(
        () => {

            const intervalId = setInterval(() => {
                console.log("Ejecutando el efecto")
                setContador(contador => contador + 1)
            }, 1000)

            return () => {
                clearInterval(intervalId)
            }
        }, []);

    return (
        <div className={styles.countCont}>

            <p className={styles.countTxt}>{contador}</p>

        </div>
    )
}

export default Count;