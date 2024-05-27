import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './ItemDetailContainer.module.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import Loader from '../Loader/Loader';

function ItemDetailContainer() {

    const [product, setProduct] = useState([])
    const { id } = useParams()

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch("./DataProducts/Products.json")
                const data = await response.json()
                console.log(data)
                const foundProduct = data.find((product) => product.id === parseInt(id));
                setProduct(foundProduct);

            } catch (error) {
                console.log("Error al obtener el producto", error)
            }
        }

        fetchData()

    }, [id])


    return (
        <div className={styles.itemDetailCont}>
            {product
                ?
                <ItemDetail product={product} />
                :
                <Loader />
            }
        </div>
    )
}

export default ItemDetailContainer;