import styles from "./Board.module.css";

function Board({text, desc}) {
    return (
        <div className={styles.parent}>
            <div className={styles.box}>
                <div className={styles.boxHdr}>
                    <h2>Praia</h2>
                </div>
                <div className={styles.boxTextDiv}>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
        
    )
}

export default Board