import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from './ItemListContainer.module.css';
import Loader from "../Loader/Loader";
import ItemList from "../ItemList/ItemList";

function ItemListContainer() {

    const [products, setProducts] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const fetchData = async () => {

            try {
                if (!id) {
                    const response = await fetch("./DataProducts/Products.json")
                    const data = await response.json()
                    console.log(data)
                    setProducts(data)
                } else {
                    const filteredProducts = products.filter(product => product.category === id);
                    console.log(filteredProducts)
                    setProducts(filteredProducts);
                }
            }
            catch (error) {
                console.log("Error al obtener los productos", error)
            }
        }
        fetchData()
    }, [id])

    return (
        <section className={styles.itemListCont}>

            {products.length == 0 ?

                <Loader />
                :
                <ItemList products={products} />
            }
        </section>
    )
}

export default ItemListContainer;