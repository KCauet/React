import styles from './Frase.module.css';

function Frase() {
    return (
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>Seja um homem de verdade!</p>
        </div>
    )
}

export default Frase