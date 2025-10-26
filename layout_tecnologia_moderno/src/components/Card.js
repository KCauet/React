import styles from './Card.module.css';

function Card({titulo, desc}) {
    return (
        <div className={styles.box}>
            <h2 className={styles.titulo}>{titulo}</h2>
            <p className={styles.desc}>{desc}</p>
        </div>
    )
}

export default Card