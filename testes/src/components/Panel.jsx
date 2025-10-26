import { useState } from 'react'
import styles from './Panel.module.css'

function Panel() {

    const [Itens, setItemList] = useState([])
    const [ItemAtual, setIAtual] = useState("")

    function confirmItem(e) {
        e.preventDefault()
        if (ItemAtual !== "" && ItemAtual !== undefined) {
            let novaLista = [...Itens, ItemAtual]
            setItemList(novaLista)
        } else {
            alert("Escreva algo")
        }

    }

    function remove(index) {
        const novaLista = Itens.filter((_, i) => i !== index);
        setItemList(novaLista);
    }

    return (
        <div className={styles.box}>
            <div>
                
            </div>
            <div className={styles.headerBox}>
                <input type="text" placeholder='Sua tarefa' onChange={(e) => setIAtual(e.target.value)} />
                <button type='submit' onClick={confirmItem}>Adicionar</button>
                <h1>Todo list:</h1>
            </div>
            <div className={styles.list}>
                {Itens.map((item, i) => (
                    <div key={i}>
                        <section className={styles.btnSec}>
                            <button onClick={() => remove(i)}>Remover</button>
                        </section>
                        <br></br>
                        <section>
                            <p>{item}</p>
                        </section>

                        
                    </div>
                )) }
            </div>
        </div>
    )
}

export default Panel