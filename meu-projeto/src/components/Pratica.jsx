import { useState } from "react";
import styles from './Pratica.module.css'

function Pratica({cor, setCor}) {

    
    const [number, setNum] = useState(0)

    function MudarCor() {
        if (number % 2 == 0) {
            setCor('blue')
            setNum(prevNum => prevNum + 1)
        } else {
            setCor('red')
            setNum(prevNum => prevNum + 1)
        }
    }

    return (
        <div className={styles.box}>
            <button onClick={MudarCor}>Mudar cor</button>
            <p >{cor}</p>
            <p>{number}</p>
        </div>
    )
}

export default Pratica