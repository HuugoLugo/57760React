import styles from './ItemListContainer.module.css';
/*Aquí aparece que messageItem is missing in props validation, 
pero en pantalla al inspeccionar no aparece ningún problema, y si funciona si cambio el texto, o el nombre a la propiedad */
function ItemListContainer({ messageItem }) {
    return (
        <section className={styles.itemList}>
            <h2>{messageItem}</h2>
        </section>
    )
}

export default ItemListContainer;